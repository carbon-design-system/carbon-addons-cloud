/**
 * @jest-environment node
 */

'use strict';

const path = require('path');
const sass = require('node-sass');

const defaultOptions = {
  includePaths: ['node_modules'],
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
