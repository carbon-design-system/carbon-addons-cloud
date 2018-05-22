import React from 'react';
import TagList from '../TagList';
import { shallow } from 'enzyme';
import { Icon } from 'carbon-components-react';
import Tag from '../Tag';

const onIconClickMock = jest.fn();

describe('TagList', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      tags: [{name: 'test1', type: 'functional'}, {name: 'test2', type: 'functional'}],
      className: "some-class",
    }
  });
  it('should render as expected', () => {
    const wrapper = shallow(<TagList {...mockProps} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(Tag)).toHaveLength(2);;
  });

  it('should display all tags by default', () => {
    mockProps = {
      ...mockProps,
      condense: 0,
    }
    const wrapper = shallow(<TagList {...mockProps} />);
    expect(wrapper.find(Tag)).toHaveLength(2);;
  });

  it('should display condensed state', () => {
    mockProps = {
      ...mockProps,
      condense: 2,
    }
    const wrapper = shallow(<TagList {...mockProps} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.bx--tag-list--tag-counter'));
  });

  it('should display 1 tag and 1 condensed tag', () => {
    mockProps = {
      ...mockProps,
      condense: 1,
    }

    const wrapper = shallow(<TagList {...mockProps} />);
    console.log(wrapper.debug());
    expect(wrapper.find(Tag)).toHaveLength(2);
    expect(wrapper.find('.bx--tag-list--tag-counter')).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  it('should display edit state when isEditable is true', () => {
    mockProps = {
      ...mockProps,
      isEditable: true,
      onIconClick: onIconClickMock,
    }

    const wrapper = shallow(<TagList {...mockProps} />);
    expect(wrapper.find(Icon)).toHaveLength(1);
    wrapper.find(Icon).simulate('click');
    expect(onIconClickMock).toHaveBeenCalled;
  });
});
