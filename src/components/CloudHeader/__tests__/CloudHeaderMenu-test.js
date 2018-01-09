import React from 'react';
import { CloudHeaderMenu } from '../../CloudHeader';
import { shallow, mount } from 'enzyme';

describe('CloudHeaderMenu', () => {
  describe('Renders as expected', () => {
    const header = shallow(<CloudHeaderMenu className="some-class" />);
    it('has the expected classes', () => {
      expect(header.hasClass('bx--cloud-header__app-menu')).toEqual(true);
    });
    it('should add extra classes that are passed via className', () => {
      expect(header.hasClass('some-class')).toEqual(true);
    });
    it('should render children', () => {
      expect(header.children().length).toEqual(1);
    });
  });
});
