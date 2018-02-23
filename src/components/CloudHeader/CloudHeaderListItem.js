import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeaderListItem = props => {
  const { children, className, href, isIcon, ariaExpanded, ...other } = props;

  const CloudHeaderListItemClasses = classNames(
    'bx--cloud-header-list__item',
    isIcon ? 'bx--cloud-header-list__item--icon' : null,
    className
  );

  let itemStyles = {};

  return (
    <li className={CloudHeaderListItemClasses}>
      {isIcon ? (
        <div
          aria-expanded={ariaExpanded}
          aria-haspopup="true"
          role="button"
          tabIndex="0"
          className="bx--cloud-header-list__btn"
          {...other}>
          {children}
        </div>
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
