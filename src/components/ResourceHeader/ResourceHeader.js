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

  renderStatus() {
    const { className, status } = this.props;

    return status.map((item, i) => {
      const statusClasses = classNames(
        {
          'bx--resource-header__status-item--active': item.isTrue,
        },
        'bx--resource-header__status-item',
        className
      );

      return <div className={statusClasses}>{item.text}</div>;
    });
  }

  render() {
    const {
      className,
      icon,
      renderActions,
      renderBreadcrumbs,
      status,
      subtitle,
      title,
    } = this.props;

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
            <div className="bx--resource-header__status">
              {status && this.renderStatus()}
            </div>
            <div className="bx--resource-header__actions">
              {renderActions && renderActions()}
            </div>
          </div>
        </section>
      </header>
    );
  }
}
