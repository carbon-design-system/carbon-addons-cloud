import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class ResourceHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.array,
  };

  render() {
    const { className, renderBreadcrumbs, subtitle, title } = this.props;

    const resourceHeaderClasses = classNames('bx--resource-header', className);

    return (
      <header className={resourceHeaderClasses}>
        {renderBreadcrumbs && renderBreadcrumbs()}
        <section className="bx--resource-header__container">
          <div className="bx--resource-header__container--left">
            <div className="bx--resource-header__title-container">
              {title && <h3 className="bx--resource-header__title">{title}</h3>}
              {subtitle &&
                subtitle.map(item => (
                  <span className="bx--resource-header__subtitle">
                    {item} &nbsp;
                  </span>
                ))}
            </div>
          </div>
          <div className="bx--resource-header__container--right">
            <div className="bx--resource-header__status" />
            <div className="bx--resource-header__actions" />
          </div>
        </section>
      </header>
    );
  }
}
