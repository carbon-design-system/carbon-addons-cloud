import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeaderList = props => {
  const { children, className, ...other } = props;

  const cloudHeaderListClasses = classNames('bx--cloud-header-list', className);

  return (
    <ul className={cloudHeaderListClasses} {...other}>
      {children}
    </ul>
  );
};

CloudHeaderList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CloudHeaderList;
