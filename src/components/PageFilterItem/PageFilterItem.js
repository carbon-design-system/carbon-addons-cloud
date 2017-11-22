import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Checkbox from 'carbon-components-react/lib/components/Checkbox';

const PageFilterItem = ({
  className,
  value,
  itemText,
  checked,
  onClick,
  type,
  isSelected,
}) => {
  const dropdownItemClasses = classNames({
    'bx--page-filter-item': true,
    'bx--page-filter--selected': isSelected && type === 'single-select',
    [className]: className,
  });

  const handleClick = () => {
    const info = {
      value,
      itemText,
    };
    onClick(info);
  };

  if (type === 'single-select') {
    return (
      <li value={value} className={dropdownItemClasses} onClick={handleClick}>
        <a
          href="#"
          onClick={/* istanbul ignore next */ evt => evt.preventDefault()}
          className="bx--page-filter-link">
          {itemText}
        </a>
      </li>
    );
  }

  /* istanbul ignore else */
  if (type === 'multi-select') {
    return (
      <li value={value} className={dropdownItemClasses}>
        <Checkbox
          id={value}
          labelText={itemText}
          defaultChecked={checked}
          onClick={handleClick}
        />
      </li>
    );
  }
};

PageFilterItem.propTypes = {
  singleSelect: PropTypes.bool,
  multiSelect: PropTypes.bool,
  value: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

PageFilterItem.defaultProps = {
  onClick: /* istanbul ignore next */ () => {},
};

export default PageFilterItem;
