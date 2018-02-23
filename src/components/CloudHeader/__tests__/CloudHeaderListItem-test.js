import React from 'react';
import CloudHeaderListItem from '../CloudHeaderListItem';
import { shallow, mount } from 'enzyme';

describe('CloudHeaderListItem', () => {
  describe('Renders as expected', () => {
    const list = mount(
      <CloudHeaderListItem className="some-class">Catalog</CloudHeaderListItem>
    );
    it('has the expected classes', () => {
      const listItem = list.find('li');
      expect(listItem.hasClass('bx--cloud-header-list__item')).toEqual(true);
    });
    it('should add extra classes that are passed via className', () => {
      expect(list.hasClass('some-class')).toEqual(true);
    });
    it('should render children', () => {
      expect(list.children().length).toEqual(1);
    });
    it('should render an anchor if it is not an icon', () => {
      const a = list.find('a');
      expect(a.length).toEqual(1);
    });
    it('should render a div with role of button if it is an icon', () => {
      const buttonListItem = mount(
        <CloudHeaderListItem isIcon className="some-class">
          Catalog
        </CloudHeaderListItem>
      );
      const button = buttonListItem.find('div[role="button"]');
      expect(button.length).toEqual(1);
    });
  });
});
