import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

/**
 * The optional header in `<InteriorLeftNav>`.
 */
const InteriorLeftNavHeader = ({
  className,
  icon,
  children,
  ...other
}) => {
  const classNames = classnames('bx--interior-left-nav__header', className);

  return (
    <div className={classNames} {...other}>
      {icon}
      <div className="bx--interior-left-nav__header__title">{children}</div>
    </div>
  );
};

InteriorLeftNavHeader.propTypes = {
  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The optional icon, e.g. `<Icon>`.
   */
  icon: PropTypes.node,

  /**
   * The child nodes.
   */
  children: PropTypes.node,
};

export default InteriorLeftNavHeader;
