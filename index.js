/**
 * Disabled because this is a development tool
 */
/* eslint-disable import/no-extraneous-dependencies, no-console */
import express from 'express';

import livereload from 'livereload';
import connectLivereload from 'connect-livereload';
import path from 'path';
import { products } from './products.js';
import { careers } from './careers.js';
import { downloads } from './downloads.js';
import {
  COUNTRIES,
  US_STATES,
  REP_LOOKUP,
  CAN,
  USA,
  CAN_PROVINCES,
} from './contactData.js';

const port = parseInt(process.env.PORT, 10) || 3000;

const CurrentDir = path.resolve();

/*
 * Live reload setup
 */
const liveReloadServer = livereload.createServer();
liveReloadServer.watch([
  path.join(CurrentDir, 'views', 'pages'),
  path.join(CurrentDir, 'views', 'partials'),
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
    contact: {
      COUNTRIES,
      US_STATES,
      CAN_PROVINCES,
      REP_LOOKUP,
      CAN,
      USA,
    },
  });
});

app.get('/about', (req, res) => {
  res.render('pages/about', {
    contact: {
      COUNTRIES,
      US_STATES,
      CAN_PROVINCES,
      REP_LOOKUP,
      CAN,
      USA,
    },
  });
});

app.get('/careers', (req, res) => {
  res.render('pages/careers', {
    careers,
    contact: {
      COUNTRIES,
      US_STATES,
      CAN_PROVINCES,
      REP_LOOKUP,
      CAN,
      USA,
    },
  });
});

app.get('/downloads', (req, res) => {
  res.render('pages/downloads', {
    downloads,
    contact: {
      COUNTRIES,
      US_STATES,
      CAN_PROVINCES,
      REP_LOOKUP,
      CAN,
      USA,
    },
  });
});

app.get('/terms_of_use', (req, res) => {
  res.render('pages/termsOfUse', {
    contact: {
      COUNTRIES,
      US_STATES,
      CAN_PROVINCES,
      REP_LOOKUP,
      CAN,
      USA,
    },
  });
});

products.forEach((product) => {
  app.get(product.endpoint, (req, res) => {
    res.render('pages/productPage', {
      product,
      contact: {
        COUNTRIES,
        US_STATES,
        CAN_PROVINCES,
      },
    });
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
