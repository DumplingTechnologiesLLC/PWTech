/**
 * Disabled because this is a development tool
 */
/* eslint-disable import/no-extraneous-dependencies, no-console, no-underscore-dangle */
import fs from 'fs';
import ejs from 'ejs';
import path from 'path';
import fse from 'fs-extra';
import { contactInformation } from './index.config.js';
import { products } from './products.js';
import { careers } from './careers.js';
import { downloads } from './downloads.js';

const copyDir = (srcDir, destDir) => {
  fse.copySync(srcDir, destDir, { overwrite: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

// To copy a folder or file

const __dirname = path.resolve('.');

const compile = (file, templatePath, data = {}, fileName) => {
  const name = fileName ?? file.split('.').slice(0, -1).join('');
  const toPath = path.join(__dirname, 'public', 'views', `${name}.html`);
  const templateStr = ejs.fileLoader(templatePath, 'utf8');
  const template = ejs.compile(templateStr, { filename: templatePath });
  const renderedHtml = template({ ...data, ...contactInformation });
  fs.writeFile(toPath, renderedHtml, (err) => {
    if (err) { console.log(err.toString()); return false; }
    return true;
  });
};
(async () => {
  // Our starting point
  try {
    // copy assets
    copyDir('./views/assets', './public/assets');
    copyDir('./views/fonts', './public/fonts');

    // Get the files as an array
    const files = await fs.promises.readdir(path.join(__dirname, 'views', 'pages'));

    // ensure structure exists
    try {
      const publicFolder = await fs.promises.stat('./public');
      if (!publicFolder.isDirectory()) {
        await fs.promises.mkdir(path.resolve('./public'));
      }
    } catch (error) {
      await fs.promises.mkdir(path.resolve('./public'));
    }

    try {
      const views = await fs.promises.stat('./public/views');
      if (!views.isDirectory()) {
        await fs.promises.mkdir(path.resolve('./public/views'));
      }
    } catch (error) {
      await fs.promises.mkdir(path.resolve('./public/views'));
    }

    // Loop them all with the new for...of
    files.forEach(async (file) => {
      const templatePath = path.join(__dirname, 'views', 'pages', file);
      const stat = await fs.promises.stat(templatePath);
      if (stat.isFile()) {
        if (file.includes('productPage')) {
          products.forEach((product) => {
            compile(file, templatePath, { product }, product.endpoint.substring(1));
          });
          // special case
        } else if (file.includes('careers')) {
          // other special case
          compile(file, templatePath, { careers });
        } else if (file.includes('downloads')) {
          // other special case
          compile(file, templatePath, { downloads });
        } else {
          // most pages just need contact info and maybe products so we just provide those
          compile(file, templatePath, { products });
        }
      }
    });
  } catch (e) {
    // Catch anything bad that happens
    console.error(e.toString());
  }
})();
