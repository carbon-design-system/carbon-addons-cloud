import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeaderContainer = props => {
  const { children, className, ...other } = props;

  const cloudHeaderContainerClasses = classNames(
    'cloud-header__container',
    className
  );

  return (
    <div className={cloudHeaderContainerClasses} {...other}>
      {children}
    </div>
  );
};

CloudHeaderContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CloudHeaderContainer;
