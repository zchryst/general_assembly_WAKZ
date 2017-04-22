
const path = require('path');
// use this for writing any paths

// looks for entry filenames - starting point
// scans the content for requires and (imports)
// bundles everything to a destination you specify
// that bundle file is what you actually add with a spript tag

// RUNNING WEBPACK
// add into package.json scripts: build: webpack
// in command line: npm run build

// WEBPACK-DEV-SERVER
// allows webpack to create bundle file in memory
// -- don't need to rerun this file each time
// also requires addition to package.json scripts: start: webpack-dev-server



const config = {
  entry: {
    app: './app' // normally should be './app/blah.js but default looks for index.js file'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }, // creates one file bundle.js with all the code
  devServer: {
    port: 4000
  }
};

module.exports = config;
