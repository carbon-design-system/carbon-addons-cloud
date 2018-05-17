import React from 'react';
import Tag from '../Tag';
import { Icon } from 'carbon-components-react';
import { shallow, mount } from 'enzyme';

describe('Tag', () => {
  describe('Renders as expected', () => {
    it('should render with the functional type', () => {
      const tag = shallow(<Tag type="functional" />);
      expect(tag.hasClass('bx--tag')).toEqual(true);
      expect(tag.hasClass('bx--tag--functional')).toEqual(true);
    });

    it('should show the tag as removed when clicking on the x', () => {
      const wrapper = mount(<Tag type="functional" isRemovable={true} />);
      const tag = wrapper.find('.bx--tag');
      expect(tag.hasClass('bx--tag--functional')).toEqual(true);
      expect(tag.hasClass('bx--tag--functional__removed')).toEqual(false);
      expect(tag.find('svg.bx--tag-close').length).toBe(1);
      wrapper.find(Icon).simulate('click');
      expect(wrapper.find('.bx--tag__removed').length).toBe(1);
    });

    it('should provide a default label based on the type', () => {
      const tag = shallow(<Tag type="functional" />);
      expect(tag.text()).toEqual('Functional');
    });
  });

  it('should allow for a custom label', () => {
    const tag = shallow(<Tag type="functional">New Version!</Tag>);
    expect(tag.text()).toEqual('New Version!');
  });

  it('should support extra class names', () => {
    const tag = shallow(<Tag type="functional" className="extra-class" />);
    expect(tag.hasClass('extra-class')).toEqual(true);
  });
});
