import React from 'react';
import CloudHeader from '../../CloudHeader';
import { shallow, mount } from 'enzyme';

describe('CloudHeader', () => {
  describe('Renders as expected', () => {
    const header = shallow(<CloudHeader className="some-class" />);
    it('has the expected classes', () => {
      expect(header.hasClass('bx--cloud-header')).toEqual(true);
    });
    it('should add extra classes that are passed via className', () => {
      expect(header.hasClass('some-class')).toEqual(true);
    });
  });
});
