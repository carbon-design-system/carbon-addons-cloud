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
    maxCharacters: PropTypes.number,
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
      maxCharacters,
      onRemove, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    let shortenedName = children;
    if (
      typeof children === 'string' &&
      maxCharacters &&
      children.length > maxCharacters
    ) {
      // if tag is key:value pair
      if (children.indexOf(':') !== -1) {
        // grab trimmed first and last half
        const beginning = children.substring(0, maxCharacters / 2).trim();
        const end = children
          .substring(children.length - maxCharacters / 2)
          .trim();

        shortenedName = beginning + '...' + end;
      } else {
        // if not key:value pair
        const shorten = children.substring(0, maxCharacters).trim();
        shortenedName = shorten + '...';
      }
    }
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
        description="detach the tag"
        onClick={this.handleRemove}
        onKeyDown={evt => {
          if (evt.which === 13 || evt.which === 32) this.handleRemove(evt);
        }}
      />
    );

    return (
      <span {...tagProps} title={children}>
        {shortenedName || TYPES[type]}
        {isRemovable && closeIcon}
      </span>
    );
  }
}

export const types = Object.keys(TYPES);
