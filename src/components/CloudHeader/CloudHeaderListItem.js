import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeaderListItem = props => {
  const { children, className, href, isIcon, ...other } = props;

  const CloudHeaderListItemClasses = classNames(
    'cloud-header-list__item',
    className
  );

  let itemStyles = {};
  if (isIcon) {
    itemStyles = {
      padding: 0,
    };
  }

  return (
    <li style={itemStyles} class={CloudHeaderListItemClasses}>
      {isIcon ? (
        <button className="cloud-header-list__btn" type="button">
          {children}
        </button>
      ) : (
        <a className="cloud-header-list__link" href={href}>
          {children}
        </a>
      )}
    </li>
  );
};

CloudHeaderListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  isIcon: PropTypes.bool,
};

CloudHeaderListItem.defaultProps = {
  isIcon: false,
  href: '',
};

export default CloudHeaderListItem;
