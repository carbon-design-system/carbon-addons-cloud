import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeaderListItem = props => {
  const { children, className, href, isIcon, ...other } = props;

  const CloudHeaderListItemClasses = classNames(
    'bx--cloud-header-list__item',
    isIcon ? 'bx--cloud-header-list__item--icon' : null,
    className
  );

  let itemStyles = {};

  return (
    <li className={CloudHeaderListItemClasses}>
      {isIcon ? (
        <button className="bx--cloud-header-list__btn" type="button" {...other}>
          {children}
        </button>
      ) : (
        <a className="bx--cloud-header-list__link" href={href} {...other}>
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
