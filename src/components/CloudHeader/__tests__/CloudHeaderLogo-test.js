import React from 'react';
import { CloudHeaderLogo } from '../../CloudHeader';
import { shallow, mount } from 'enzyme';

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
