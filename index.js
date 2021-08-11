/**
 * Disabled because this is a development tool
 */
/* eslint-disable import/no-extraneous-dependencies, no-console */
const express = require('express');

const port = parseInt(process.env.PORT, 10) || 3000;
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const path = require('path');
const fs = require('fs');

const products = JSON.parse(fs.readFileSync('./products.json', { encoding: 'utf8', flag: 'r' }));
/**
 * Live reload setup
 */
const liveReloadServer = livereload.createServer();
liveReloadServer.watch([
  path.join(__dirname, 'views', 'pages'),
  path.join(__dirname, 'views', 'partials'),
]);

liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

const app = express();
app.set('view engine', 'ejs');

// Use `.hbs` for extensions and find partials in `views/partials`.

app.use(connectLivereload());
app.use(express.static('views'));

// Hot reload!
// ALL server routes are in this module!

app.get('/', (req, res) => {
  res.render('pages/index', {
    products,
  });
});
app.get('/about', (req, res) => {
  res.render('pages/about');
});
app.get('/terms_of_use', (req, res) => {
  res.render('pages/termsOfUse');
});
products.forEach((product) => {
  app.get(product.endpoint, (req, res) => {
    res.render('pages/productPage', {
      product,
    });
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
