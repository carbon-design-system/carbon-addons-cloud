import React from 'react';
import CloudHeader from './CloudHeader';
import CloudHeaderWrapper from './CloudHeaderWrapper';
import CloudHeaderMenu from './CloudHeaderMenu';
import CloudHeaderLogo from './CloudHeaderLogo';
import CloudHeaderList from './CloudHeaderList';
import CloudHeaderListItem from './CloudHeaderListItem';
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

describe('CloudHeaderLogo', () => {
  describe('Renders as expected', () => {
    const header = mount(
      <CloudHeaderLogo
        href="http://www.google.com"
        companyName="Test Co."
        productName="Tester"
        className="some-class"
      />
    );
    it('has the expected classes', () => {
      const a = header.find('a');
      expect(a.hasClass('bx--cloud-header-brand')).toEqual(true);
    });
    it('should add extra classes that are passed via className', () => {
      expect(header.hasClass('some-class')).toEqual(true);
    });
    it('should render children', () => {
      expect(header.children().length).toEqual(1);
    });
    it('has the expected href value', () => {
      expect(header.props().href).toEqual('http://www.google.com');
    });
    it('has the expected company name value', () => {
      expect(header.props().companyName).toEqual('Test Co.');
    });
    it('has the expected product name value', () => {
      expect(header.props().productName).toEqual('Tester');
    });
  });
});

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

describe('CloudHeaderList', () => {
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
    it('should render a button if it is an icon', () => {
      const buttonListItem = mount(
        <CloudHeaderListItem isIcon className="some-class">
          Catalog
        </CloudHeaderListItem>
      );
      const button = buttonListItem.find('button');
      expect(button.length).toEqual(1);
    });
  });
});
