import React from 'react';
import { CloudHeaderWrapper } from '../../CloudHeader';
import { CloudHeaderMenu } from '../../CloudHeader';
import { shallow, mount } from 'enzyme';

describe('CloudHeaderWrapper', () => {
  describe('Renders as expected', () => {
    const header = shallow(
      <CloudHeaderWrapper className="some-class">
        <CloudHeaderMenu />
      </CloudHeaderWrapper>
    );
    it('has the expected classes', () => {
      expect(header.hasClass('bx--cloud-header__wrapper')).toEqual(true);
    });
    it('should add extra classes that are passed via className', () => {
      expect(header.hasClass('some-class')).toEqual(true);
    });
    it('should render children', () => {
      expect(header.children().length).toEqual(1);
    });
  });
});
