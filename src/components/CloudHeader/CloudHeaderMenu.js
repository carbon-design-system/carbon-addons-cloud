import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeaderMenu = props => {
  const { className, ...other } = props;

  const cloudHeaderMenuClasses = classNames(
    'cloud-header__app-menu',
    className
  );

  return (
    <button className={cloudHeaderMenuClasses} type="button" {...other}>
      <svg fillRule="evenodd">
        <title>cloud header menu</title>
        <path d="M0 0h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
      </svg>
    </button>
  );
};

CloudHeaderMenu.propTypes = {
  className: PropTypes.string,
};

export default CloudHeaderMenu;
