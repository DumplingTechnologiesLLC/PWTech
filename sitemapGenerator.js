/**
 * This is a development aid.
 */
/* eslint-disable import/no-extraneous-dependencies, no-console */

import prompt from 'prompt';
import fs from 'fs/promises';
import path from 'path';
import xml2js from 'xml2js';
import chalk from 'chalk';

import { products } from './products.js';

const currentDir = path.resolve();

const priorityLookup = {
  '/': 1,
  '/about': 0.3,
  '/terms_of_use': 0.3,
  '/careers': 0.3,
};

const Generator = async () => {
  let fileString;
  const sitemapFile = path.resolve(path.join(currentDir, 'views', 'assets', 'sitemap.xml'));
  try {
    fileString = await fs.readFile(sitemapFile, 'utf-8');
    fileString = fileString.replace('\ufeff', '');
  } catch (error) {
    fileString = '';
  }

  const parser = new xml2js.Parser();

  let data;
  try {
    data = await new Promise((resolve, reject) => parser.parseString(fileString, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    }));
  } catch (error) {
    data = {};
  }

  /**
   * Convert the urlset into a dictionary lookup keyed by endpoint with the value being the lastmod date
   */
  const locMap = data.urlset.url.reduce((acc, cur) => {
    const [, endpoint] = cur.loc[0].split('pwtech.us');
    [acc[endpoint]] = cur.lastmod;
    return acc;
  }, {});

  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth()}`.padStart(2, '0');
  const date = `${today.getDate()}`.padStart(2, '0');
  const currentDate = `${year}-${month}-${date}`;

  const QuestionConstructor = (defaultValue) => ({
    pattern: /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
    default: defaultValue,
  });
  const QuestionSuffix = ' Date of Update';
  const QuestionPromptGenerator = (url) => `"${url}"${QuestionSuffix}`;
  const questions = {
    properties: {
      [QuestionPromptGenerator('/')]: QuestionConstructor(locMap['/'] ?? currentDate),
      [QuestionPromptGenerator('/about')]: QuestionConstructor(locMap['/about'] ?? currentDate),
      [QuestionPromptGenerator('/terms_of_use')]: QuestionConstructor(locMap['/terms_of_use'] ?? currentDate),
      [QuestionPromptGenerator('/careers')]: QuestionConstructor(locMap['/careers'] ?? currentDate),
    },
  };
  products.forEach((product) => {
    questions.properties[QuestionPromptGenerator(product.endpoint)] = QuestionConstructor(
      locMap[product.endpoint] ?? currentDate,
    );
  });
  console.log(chalk`{green Starting up}`);
  /**
   * We don't want to be creating new lines in the terminal.
   */
  /* eslint-disable-next-line max-len */
  console.log(chalk`{cyan.inverse Info} In order to generate a new sitemap, this generator will ask you a series of questions for the latest modification date of each endpoint. It will provide as a default the current value set in the sitemap or today's date for new endpoints.`);
  prompt.start();

  prompt.get(questions, (err, result) => {
    //
    // Log the results.
    //
    const urlTemplate = (endpoint, dateOfUpdate, priority) => `
  <url>
    <loc>http://www.pwtech.us${endpoint}</loc>
    <lastmod>${dateOfUpdate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
    const extractEndpoint = (question) => question.split(QuestionSuffix)[0].slice(1, -1);
    const urls = [];
    Object.entries(result).forEach(([questionPrompt, userSuppliedDate]) => {
      const url = extractEndpoint(questionPrompt);
      urls.push(urlTemplate(url, userSuppliedDate, priorityLookup[url] ?? 0.5));
    });
    const xmlTemplate = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('')}
</urlset>
    `;
    console.log(chalk`{cyan.inverse Info} Writing your changes to {cyan ${sitemapFile}}`);
    fs.writeFile(sitemapFile, xmlTemplate);
    console.log(chalk`{green Success.}`);
    console.log(chalk`{green Shutting down.}`);
  });
};

Generator();
