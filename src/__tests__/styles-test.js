/**
 * @jest-environment node
 */

'use strict';

const path = require('path');
const sass = require('node-sass');
const tildeImporter = require('node-sass-tilde-importer');

const defaultOptions = {
  includePaths: ['node_modules'],
  importer: tildeImporter,
};

describe('carbon-addons-cloud', () => {
  it('should compile', done => {
    const file = path.resolve(__dirname, '../index.scss');
    sass.render({ file, ...defaultOptions }, (error, result) => {
      if (error) {
        done.fail(error);
        return;
      }
      expect(result.css).toBeDefined();
      done();
    });
  });
});
