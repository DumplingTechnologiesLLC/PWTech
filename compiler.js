/**
 * Disabled because this is a development tool
 */
/* eslint-disable import/no-extraneous-dependencies, no-console */
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

(async () => {
  // Our starting point
  try {
    // Get the files as an array
    const files = await fs.promises.readdir(path.join(__dirname, 'views', 'pages'));

    // Loop them all with the new for...of
    files.forEach(async (file) => {
      const templatePath = path.join(__dirname, 'views', 'pages', file);
      const stat = await fs.promises.stat(templatePath);

      // non product pages we can just compile without issue. Product page we need to load the products from JSON
      if (stat.isFile()) {
        const toPath = path.join(__dirname, 'public', 'views', `${file.split('.').slice(0, -1).join('')}.html`);
        const templateStr = ejs.fileLoader(templatePath, 'utf8');
        const template = ejs.compile(templateStr, { filename: templatePath });
        const renderedHtml = template();
        fs.writeFile(toPath, renderedHtml, (err) => {
          if (err) { console.log(err); return false; }
          return true;
        });
      }
    });
  } catch (e) {
    // Catch anything bad that happens
    console.error("We've thrown! Whoops!", e);
  }
})();
