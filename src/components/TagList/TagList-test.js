import React from 'react';
import TagList from '../TagList';
import { shallow } from 'enzyme';
import { Icon, Tag } from 'carbon-components-react';

const onIconClickMock = jest.fn();

const defaultProps = {
  tags: [{name: 'test1', type: 'beta'}, {name: 'test2', type: 'beta'}],
  className: "some-class"
};

describe('TagList', () => {

    it('renders as expected', () => {

      const wrapper = shallow(<TagList {...defaultProps} />);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(Tag)).toHaveLength(2);
    });

    it('condenses all', () => {

      const condenseProps = {
        ...defaultProps,
        condense: 0,
      };
      
      const wrapper = shallow(<TagList {...condenseProps} />);
      expect(wrapper).toHaveLength(1);
    });

    it('condenses 1', () => {

      const condenseProps = {
        ...defaultProps,
        condense: 1,
      };

      const wrapper = shallow(<TagList {...condenseProps} />);
      console.log(wrapper.debug());
      expect(wrapper.find('bx--tag-list--tag-counter')).toHaveLength(1);
      expect(wrapper.find(Icon));
    });

    it('displays edit state', () => {

      const condenseProps = {
        ...defaultProps,
        isEditable: true,
        onIconClick: onIconClickMock,
      };

      const wrapper = shallow(<TagList {...condenseProps} />);

      expect(wrapper.find(Icon)).toHaveLength(1);
      wrapper.find(Icon).simulate('click');
      expect(onIconClickMock).toHaveBeenCalled;
    });
});
