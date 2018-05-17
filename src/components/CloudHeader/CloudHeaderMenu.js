import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeaderMenu = props => {
  const { className, ...other } = props;

  const cloudHeaderMenuClasses = classNames(
    'bx--cloud-header__app-menu',
    className
  );

  return (
    <button className={cloudHeaderMenuClasses} type="button" {...other}>
      <svg width="20" height="20">
        <title>cloud header menu</title>
        <path d="M3 4h14v1H3zM3 10h14v1H3zM3 16h14v1H3z" />
      </svg>
    </button>
  );
};

CloudHeaderMenu.propTypes = {
  className: PropTypes.string,
};

export default CloudHeaderMenu;
