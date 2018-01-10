# carbon-addons-cloud

[![Build Status](https://travis-ci.org/carbon-design-system/carbon-addons-cloud.svg?branch=master)](https://travis-ci.org/carbon-design-system/carbon-addons-cloud)

> Carbon add-on for IBM Cloud

## Usage

You can install the `carbon-addons-cloud` package through NPM by doing either of the following:

```bash
npm install carbon-addons-cloud --save

# Or, with yarn
yarn add carbon-addons-cloud
```

After the package is installed, you can access components inside of the package by importing them in one of the following ways:

```js
// With ES2015 modules
import { CloudHeader } from 'carbon-addons-cloud';

// With CommonJS modules
const { CloudHeader } = require('carbon-addons-cloud');
```

The package also ships with the components Sass files as well. To use these, all you have to do is import the files in one of the following ways:

```scss
// Default import path relative to `node_modules`
@import 'carbon-addons-cloud/scss/index.scss'

// If you're using webpack, you can use `~` to alias a node module
@import '~/carbon-addons-cloud/scss/index.scss'
```

In addition, make sure to include `node_modules` in your `node-sass` config. This will guarantee that all imports work as expected. You can find more about this option [here](https://github.com/sass/node-sass#includepaths).

Component-specific Sass files are also included and can be imported in a similar fashion.
