import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeaderWrapper = props => {
  const { children, className, ...other } = props;

  const cloudHeaderWrapperClasses = classNames(
    'bx--cloud-header__wrapper',
    className
  );

  return (
    <div className={cloudHeaderWrapperClasses} {...other}>
      {children}
    </div>
  );
};

CloudHeaderWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CloudHeaderWrapper;
