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
    const { className, renderBreadcrumbs, subtitle, title, icon } = this.props;

    const resourceHeaderClasses = classNames('bx--resource-header', className);

    return (
      <header className={resourceHeaderClasses}>
        <section className="bx--resource-header__container">
          <div className="bx--resource-header__container--left">
            {renderBreadcrumbs && renderBreadcrumbs()}
            <div className="bx--resource-header__title-container">
              {icon && <div className="bx--resource-header__icon">{icon}</div>}
              <div className="bx--resource-header__title">
                {title && <h3>{title}</h3>}
                <div className="bx--resource-header__subtitle">
                  {subtitle &&
                    subtitle.map((item, key) => (
                      <span key={key}>{item} &nbsp;</span>
                    ))}
                </div>
              </div>
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
