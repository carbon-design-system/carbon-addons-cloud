# carbon-addons-cloud

[![Build Status](https://travis-ci.org/carbon-design-system/carbon-addons-cloud.svg?branch=master)](https://travis-ci.org/carbon-design-system/carbon-addons-cloud)
[![Greenkeeper badge](https://badges.greenkeeper.io/carbon-design-system/carbon-addons-cloud.svg)](https://greenkeeper.io/)

> Carbon add-on for IBM Cloud

## Usage

## Getting Started

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install -S carbon-components carbon-addons-cloud
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command instead:

```bash
yarn add carbon-components carbon-addons-cloud
```

This package so ships with the Sass and CSS files for each component in the Cloud Add-on. To use these, all you have to do is import the files in one of the following ways:

```scss
// Default import path relative to `node_modules`
@import 'carbon-addons-cloud/scss/styles.scss';
/* If you're using webpack, you can use `~` to alias a node module */
@import '~/carbon-addons-cloud/scss/styles.scss';
```

In addition, make sure to include `node_modules` in your `node-sass` config. This will guarantee that all imports work as expected. You can find more about this option [here](https://github.com/sass/node-sass#includepaths).

Component-specific Sass files are also included and can be imported in a similar fashion.
