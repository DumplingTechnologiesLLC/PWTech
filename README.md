# Prerequisites

1. You will need `npm` set up on your computer.

For Windows: https://phoenixnap.com/kb/install-node-js-npm-on-windows

For Linux: https://linuxconfig.org/install-npm-on-linux/

# Setup

1. Download this project
2. Run `npm install`


## For Development

1. Run `npm run start` and open a browser to `http://localhost:3000` to see the static frontend
2. You can now make changes and the server will hot-reload the changes.

### Changing CSS

The easiest way to change the CSS is to edit the `*.scss` files in `views/css` while the development server is running.
The sass compiler will watch those files and output the changes into `views/css` for development, and `public/css` for
production.


## For Production

Once your changes are complete, you can run `npm run compile` to have all the templates compiled into the `public`
directory, which you can then serve directly as static files.
