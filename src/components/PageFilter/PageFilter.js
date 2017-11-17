import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import ClickListener from 'carbon-components-react/es/internal/ClickListener';
import Icon from 'carbon-components-react/es/components/Icon';
import './_page-filter.scss';

export default class PageFilter extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    defaultText: PropTypes.string,
    value: PropTypes.string,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    selectedText: PropTypes.string,
    open: PropTypes.bool,
    iconDescription: PropTypes.string,
    disabled: PropTypes.bool,
    singleSelect: PropTypes.bool.isRequired,
    multiSelect: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    labelPlural: PropTypes.string.isRequired,
  };

  static defaultProps = {
    tabIndex: 0,
    open: false,
    disabled: false,
    iconDescription: 'open list of options',
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = this.resetState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.resetState(nextProps));
  }

  resetState(props) {
    if (this.props.singleSelect) {
      const { children, selectedText, value, defaultText, open } = props;

      let matchingChild;
      React.Children.forEach(children, child => {
        if (
          child.props.itemText === selectedText ||
          child.props.value === value
        ) {
          matchingChild = child;
        }
      });

      if (matchingChild) {
        return {
          open,
          selectedText: matchingChild.props.itemText,
          value: matchingChild.props.value,
        };
      }
      return {
        open,
        selectedText: defaultText,
        value: '',
      };
    }

    if (this.props.multiSelect) {
      const { children, open } = props;

      const items = [];

      React.Children.forEach(children, child => {
        const { checked, itemText, value } = child.props;
        items.push({
          itemText,
          value,
          checked: checked || false,
        });
      });

      return {
        open,
        items,
      };
    }
  }

  close = () => {
    this.setState({ open: false });
  };

  toggle = evt => {
    if (this.props.disabled) {
      return;
    }

    // Open on click, enter, or space
    if (evt.which === 13 || evt.which === 32 || evt.type === 'click') {
      this.setState({ open: !this.state.open });
    }
  };

  handleItemClick = info => {
    this.props.onChange(info);

    if (this.props.singleSelect) {
      this.setState({
        selectedText: info.itemText,
        value: info.value,
      });
    }

    if (this.props.multiSelect) {
      const items = [...this.state.items];
      const index = items.findIndex(item => item.value === info.value);
      items[index].checked = !items[index].checked;
      this.setState({ items });
    }
  };

  selectedText = () => {
    if (this.props.singleSelect) {
      return <span>{this.state.selectedText}</span>;
    }

    if (this.props.multiSelect) {
      let selectionCount = 0;

      this.state.items.forEach(item => {
        if (item.checked) {
          selectionCount += 1;
        }
      });

      if (selectionCount === 0) {
        return <span>{this.props.defaultText}</span>;
      }

      if (selectionCount === 1) {
        return (
          <span>{this.state.items.find(item => item.checked).itemText}</span>
        );
      }

      return (
        <div>
          <span>{this.props.labelPlural}</span>
          <div className="bx--page-filter__badge">{selectionCount}</div>
        </div>
      );
    }
  };

  render() {
    const {
      tabIndex,
      defaultText, // eslint-disable-line no-unused-vars
      iconDescription,
      disabled,
      selectedText, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        onClick: (...args) => {
          child.props.onClick && child.props.onClick(...args);
          this.handleItemClick(...args);
        },
        singleSelect: this.props.singleSelect,
        multiSelect: this.props.multiSelect,
      })
    );

    const dropdownClasses = classNames({
      'bx--page-filter': true,
      'bx--page-filter--open': this.state.open,
      'bx--page-filter--disabled': disabled,
      [this.props.className]: this.props.className,
    });

    const dropdown = (
      <ClickListener onClickOutside={this.close}>
        <ul
          {...other}
          onClick={this.toggle}
          onKeyPress={this.toggle}
          value={this.state.value}
          className={dropdownClasses}
          tabIndex={tabIndex}>
          <span className="bx--page-filter__label">{this.props.label}</span>
          <li className="bx--page-filter-text">
            {this.selectedText()}
            <Icon
              name="chevron--down"
              className="bx--page-filter__chevron"
              description={iconDescription}
            />
          </li>
          <li>
            <ul className="bx--page-filter-list">{children}</ul>
          </li>
        </ul>
      </ClickListener>
    );

    return dropdown;
  }
}
