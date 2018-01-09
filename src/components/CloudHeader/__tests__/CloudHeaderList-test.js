import React from 'react';
import { CloudHeaderList } from '../../CloudHeader';
import { CloudHeaderListItem } from '../../CloudHeader';
import { shallow, mount } from 'enzyme';

describe('CloudHeaderList', () => {
  describe('Renders as expected', () => {
    const list = shallow(
      <CloudHeaderList className="some-class">
        <CloudHeaderListItem>Catalog</CloudHeaderListItem>
        <CloudHeaderListItem>Support</CloudHeaderListItem>
        <CloudHeaderListItem>Manage</CloudHeaderListItem>
      </CloudHeaderList>
    );
    it('has the expected classes', () => {
      expect(list.hasClass('bx--cloud-header-list')).toEqual(true);
    });
    it('should add extra classes that are passed via className', () => {
      expect(list.hasClass('some-class')).toEqual(true);
    });
    it('should render children', () => {
      expect(list.children().length).toEqual(3);
    });
  });
});
