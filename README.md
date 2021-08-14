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


## For Production

Once your changes are complete, you can run `npm run compile` to have all the templates compiled into the `public`
directory, which you can then serve directly as static files.
