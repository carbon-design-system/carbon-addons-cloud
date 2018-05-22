import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { Icon } from 'carbon-components-react';

const TYPES = {
  functional: 'Functional',
};

export default class Tag extends Component {
  state = {
    removed: false,
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(TYPES)).isRequired,
    isRemovable: PropTypes.bool,
    onRemove: PropTypes.func,
  };

  static defaultProps = {
    onRemove: () => {},
    isRemovable: false,
  };

  handleRemove = event => {
    const { onRemove, children } = this.props;
    event.stopPropagation();
    this.setState({
      removed: true,
    });

    if (onRemove) {
      onRemove(children);
    }
  };

  render() {
    const {
      children,
      className,
      type,
      isRemovable,
      onRemove, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;
    const tagClasses = classNames({
      'bx--tag': true,
      [`bx--tag--${type}`]: true,
      'bx--tag__removed': this.state.removed,
      [className]: className,
    });

    let tagProps = {
      ...other,
      className: tagClasses,
    };

    const closeIcon = (
      <Icon
        className="bx--tag-close"
        name="close"
        tabIndex="0"
        role="button"
        onClick={this.handleRemove}
        onKeyDown={evt => {
          if (evt.which === 13 || evt.which === 32) this.handleRemove(evt);
        }}
      />
    );

    return (
      <span {...tagProps}>
        {children || TYPES[type]}
        {isRemovable && closeIcon}
      </span>
    );
  }
}

export const types = Object.keys(TYPES);
