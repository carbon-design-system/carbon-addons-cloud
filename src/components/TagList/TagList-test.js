import React from 'react';
import TagList from '../TagList';
import { shallow } from 'enzyme';
import { Icon } from 'carbon-components-react';
import Tag from '../Tag';

const onIconClickMock = jest.fn();

const defaultProps = {
  tags: [{name: 'test1', type: 'functional'}, {name: 'test2', type: 'functional'}],
  className: "some-class"
};

describe('TagList', () => {

    it('renders as expected', () => {

      const wrapper = shallow(<TagList {...defaultProps} />);
      expect(wrapper.length).toEqual(1);
      expect(wrapper.find(Tag)).toHaveLength(2);
    });

    it('displays all', () => {

      const condenseProps = {
        ...defaultProps,
        condense: 0,
      };
      
      const wrapper = shallow(<TagList {...condenseProps} />);
      expect(wrapper.find(Tag)).toHaveLength(2);
    });

    it('condenses all', () => {
      
      const condenseProps = {
        ...defaultProps,
        condense: 2,
      };
      
      const wrapper = shallow(<TagList {...condenseProps} />);
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find('bx--tag-list--tag-counter'));
    });

    it('condenses 1', () => {

      const condenseProps = {
        ...defaultProps,
        condense: 1,
      };

      const wrapper = shallow(<TagList {...condenseProps} />);
      expect(wrapper.find('bx--tag-list--tag-counter'));
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
