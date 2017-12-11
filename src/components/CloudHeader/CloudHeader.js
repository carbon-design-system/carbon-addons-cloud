import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeader = props => {
  const { children, className, ...other } = props;

  const cloudHeaderClasses = classNames('bx--cloud-header', className);

  return (
    <nav className={cloudHeaderClasses} {...other}>
      {children}
    </nav>
  );
};

CloudHeader.propTypes = {
  children: PropTypes.node,
};

export default CloudHeader;
