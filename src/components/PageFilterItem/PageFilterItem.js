import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Checkbox from 'carbon-components-react/es/components/Checkbox';

const PageFilterItem = ({ className, value, itemText, onClick, ...other }) => {
  const dropdownItemClasses = classNames({
    'bx--page-filter-item': true,
    [className]: className,
  });

  const handleClick = () => {
    const info = {
      value,
      itemText,
    };
    onClick(info);
  };

  if (other.singleSelect) {
    return (
      <li
        {...other}
        value={value}
        className={dropdownItemClasses}
        onClick={handleClick}>
        <a
          href="#"
          onClick={/* istanbul ignore next */ evt => evt.preventDefault()}
          className="bx--page-filter-link">
          {itemText}
        </a>
      </li>
    );
  }

  if (other.multiSelect) {
    return (
      <li {...other} value={value} className={dropdownItemClasses}>
        <Checkbox
          labelText={itemText}
          defaultChecked={other.checked}
          onClick={handleClick}
        />
      </li>
    );
  }
};

PageFilterItem.propTypes = {
  value: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

PageFilterItem.defaultProps = {
  onClick: /* istanbul ignore next */ () => {},
};

export default PageFilterItem;
