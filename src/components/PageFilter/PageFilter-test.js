import React from 'react';
import PageFilter from '../PageFilter';
import PageFilterItem from '../PageFilterItem';
import ClickListener from 'carbon-components-react/lib/internal/ClickListener';
import Icon from 'carbon-components-react/lib/components/Icon';
import { shallow, mount } from 'enzyme';

describe('PageFilter', () => {
  describe('Single Select', () => {
    describe('Renders as expected', () => {
      const defaultProps = {
        label: 'Organization',
        labelPlural: 'Organizations',
        className: 'extra-class',
        defaultText: '--',
        type: 'single-select',
      };

      const wrapper = shallow(<PageFilter {...defaultProps} />);
      const pageFilterWrapper = wrapper.childAt(0);

      const mounted = mount(<PageFilter {...defaultProps} />);

      it('renders a dropdown', () => {
        expect(wrapper.length).toEqual(1);
      });

      it('has the expected classes', () => {
        expect(pageFilterWrapper.hasClass('bx--page-filter')).toEqual(true);
      });

      it('has the expected classes when disabled', () => {
        const wrapper = shallow(
          <PageFilter {...defaultProps} disabled />
        ).childAt(0);

        expect(wrapper.hasClass('bx--page-filter--disabled')).toEqual(true);
      });

      it('should add extra classes that are passed via className', () => {
        expect(pageFilterWrapper.hasClass('extra-class')).toEqual(true);
      });

      it('should render children as expected', () => {
        const pageFilter = shallow(
          <PageFilter {...defaultProps}>
            <div className="test-child" />
            <div className="test-child" />
          </PageFilter>
        );
        expect(pageFilter.find('.test-child').length).toEqual(2);
      });

      it('should use correct icon', () => {
        const icon = mounted.find(Icon);
        expect(icon.props().name).toEqual('chevron--down');
      });

      it('has the expected default iconDescription', () => {
        expect(mounted.props().iconDescription).toEqual('open list of options');
      });

      it('adds new iconDescription when passed via props', () => {
        mounted.setProps({ iconDescription: 'new description' });
        expect(mounted.props().iconDescription).toEqual('new description');
      });

      it('should have iconDescription match Icon component description prop', () => {
        const matches =
          mounted.props().iconDescription ===
          mounted.find(Icon).props().description;
        expect(matches).toEqual(true);
      });

      it('should start with the selected text over the default text when present in props', () => {
        const pageFilter = shallow(
          <PageFilter
            {...defaultProps}
            defaultText="Choose something..."
            selectedText="Value">
            <PageFilterItem itemText="Value" value="Value" />
          </PageFilter>
        );
        expect(pageFilter.state().selectedText).toEqual('Value');
      });

      it('should select default text when provided selected text does not match any children', () => {
        const pageFilter = shallow(
          <PageFilter
            {...defaultProps}
            defaultText="Choose something..."
            selectedText="NotValue">
            <PageFilterItem itemText="Value" value="Value" />
          </PageFilter>
        );
        expect(pageFilter.state().selectedText).toEqual('Choose something...');
      });
    });

    describe('events', () => {
      const defaultProps = {
        label: 'Organization',
        labelPlural: 'Organizations',
        className: 'extra-class',
        defaultText: '--',
        type: 'single-select',
      };

      const onClick = jest.fn();

      const wrapper = mount(
        <PageFilter {...defaultProps} onClick={onClick}>
          <PageFilterItem
            className="test-child"
            itemText="test-child"
            value="test-child"
          />
        </PageFilter>
      );

      const pageFilter = wrapper.find('.bx--page-filter');
      const child = wrapper.find('.test-child');

      it('should add the open dropdown class on click', () => {
        pageFilter.simulate('click');
        expect(
          wrapper.find('.bx--page-filter').hasClass('bx--page-filter--open')
        ).toEqual(true);
      });

      it('should toggle the open dropdown class on Enter', () => {
        wrapper.setState({ open: false });
        pageFilter.simulate('keypress', { which: 13 });
        expect(
          wrapper.find('.bx--page-filter').hasClass('bx--page-filter--open')
        ).toEqual(true);
        pageFilter.simulate('keypress', { which: 13 });
        expect(
          wrapper.find('.bx--page-filter').hasClass('bx--page-filter--open')
        ).toEqual(false);
      });

      it('should toggle the open dropdown class on Space', () => {
        wrapper.setState({ open: false });
        pageFilter.simulate('keypress', { which: 32 });
        expect(
          wrapper.find('.bx--page-filter').hasClass('bx--page-filter--open')
        ).toEqual(true);
        pageFilter.simulate('keypress', { which: 32 });
        expect(
          wrapper.find('.bx--page-filter').hasClass('bx--page-filter--open')
        ).toEqual(false);
      });

      it('should update data value state when child item is clicked', () => {
        child.last().simulate('click');
        expect(wrapper.find('.bx--page-filter').props().value).toEqual(
          'test-child'
        );
      });

      it('should update selected text when child item is clicked', () => {
        child.last().simulate('click');
        expect(wrapper.state().selectedText).toEqual('test-child');
      });

      it('should close dropdown on click outside', () => {
        wrapper.setState({ open: true });
        const listener = wrapper.find(ClickListener);
        listener.props().onClickOutside();
        expect(wrapper.state().open).toBe(false);
      });

      it('should not open when disabled', () => {
        const wrapper = mount(
          <PageFilter {...defaultProps} onClick={onClick} disabled>
            <PageFilterItem
              className="test-child"
              itemText="test-child"
              value="test-child"
            />
          </PageFilter>
        );
        const pageFilter = wrapper.find('.bx--page-filter--disabled');

        pageFilter.simulate('click');
        expect(pageFilter.hasClass('bx--page-filter--open')).toEqual(false);
        pageFilter.simulate('keypress', { which: 13 });
        expect(pageFilter.hasClass('bx--page-filter--open')).toEqual(false);
        pageFilter.simulate('keypress', { which: 32 });
        expect(pageFilter.hasClass('bx--page-filter--open')).toEqual(false);
        expect(wrapper.state().open).toBe(false);
      });
    });
  });
});
