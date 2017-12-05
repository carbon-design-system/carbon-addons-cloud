import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CloudHeaderLogo = props => {
  const {
    children,
    className,
    href,
    companyName,
    productName,
    ...other
  } = props;

  const CloudHeaderLogoClasses = classNames('cloud-header-brand', className);

  return (
    <a href={href} className={CloudHeaderLogoClasses} {...other}>
      {children ? (
        <div className="cloud-header-brand__icon">{children}</div>
      ) : null}
      <h4 className="cloud-header-brand__text">
        {companyName}&nbsp;
        <span>{productName}</span>
      </h4>
    </a>
  );
};

CloudHeaderLogo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  companyName: PropTypes.string,
  productName: PropTypes.string,
  href: PropTypes.string,
};

CloudHeaderLogo.defaultProps = {
  companyName: 'IBM',
  productName: 'Cloud',
  href: 'https://www.ibm.com/cloud/',
};

export default CloudHeaderLogo;
