# Prerequisites

1. You will need `npm` and `node` set up on your computer.

For Windows: https://phoenixnap.com/kb/install-node-js-npm-on-windows

For Linux: 
- https://linuxconfig.org/install-npm-on-linux/
- https://nodejs.org/en/download/package-manager/

# Setup

1. Download this project
2. Run `npm install`


## For Development

1. Run `npm run start` and open a browser to `http://localhost:3000` to see the static frontend
2. You can now make changes and the server will hot-reload the changes.

### Changing CSS

The easiest way to change the CSS is to edit the `*.scss` files in `views/css` while the development server is running.
The sass compiler will watch those files and output the changes into `views/css` for development, and `public/css` for
production. Then simply serve the new CSS files found in `public/css`


### Changing Product Information

The easiest way to change product information is to edit the `products.js` file then rebuild the project to receive
new static files. You can add new products there, the only requirement is that the products follow the format already
established.


### Changing Career Information

The easiest way to change career information is to edit the `careers.js` file then rebuild the project to receive
new static files. You can add new careers there, the only requirement is that the careers follow the format already
established.

### Updating Sitemap

The easiest way to update the sitemap is to run `npm run generate-sitemap` which will start up a generator that will
review the list of products you've created, and generate a new sitemap after asking you when was the last time
a product was updated (by default it will attempt to read the existing sitemap in `views/assets/sitemap.xml` to grab
the previous values.)

By default, the Sitemap prioritizes product pages a 0.5 priority for crawlers, the home page at 1.0 priority, and 
the other pages (such as about, careers, terms of use) at 0.3. You can change this by modifying the `priorityLookup`
variable in `sitemapGenerator.js`.

If you add additional pages that aren't related to products, this sitemap generator will not detect them, so you will
need to add them to the `questions` variable in `sitemapGenerator.js`, in this format:

```js
const questions = {
    properties: {
      [QuestionPromptGenerator('/')]: QuestionConstructor(locMap['/'] ?? currentDate),
      [QuestionPromptGenerator('/about')]: QuestionConstructor(locMap['/about'] ?? currentDate),
      [QuestionPromptGenerator('/terms_of_use')]: QuestionConstructor(locMap['/terms_of_use'] ?? currentDate),
      [QuestionPromptGenerator('/careers')]: QuestionConstructor(locMap['/careers'] ?? currentDate),
      // your new url here
    },
  };
```


## For Production

Once your changes are complete, you can run `npm run compile` to have all the templates compiled into the `public`
directory, which you can then serve directly as static files.
