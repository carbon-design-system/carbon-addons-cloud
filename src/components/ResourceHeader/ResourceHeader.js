import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'carbon-components-react';

export class ResourceHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.array,
  };

  renderActionButtons(type) {
    const { renderStop, renderReboot, renderMaintenance } = this.props;
    const reboot = (
      <svg
        className="bx--resource-header__button--icon"
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fillRule="evenodd">
        <path d="M12.2 4.6L12 4V0H8v4l-.2.6C3.4 5.6.2 9.5.2 14.2.2 19.7 4.6 24 10 24s9.8-4.4 9.8-9.8c0-4.7-3.3-8.6-7.6-9.6zM10 21.8c-4.3 0-7.6-3.4-7.6-7.6 0-3.5 2.2-6.3 5.5-7.3L8 7v7h4V7l.2-.1c3.3 1 5.5 3.8 5.5 7.3-.1 4.2-3.4 7.6-7.7 7.6z" />
      </svg>
    );

    const maintenance = (
      <svg className="bx--resource-header__button--icon" width="18" height="17">
        <g fill="none" fillRule="evenodd">
          <path
            stroke="#3D70B2"
            strokeWidth="1.5"
            d="M.75.86179387h16.4577635v15.3882061H.75z"
          />
          <path fill="#3D70B2" d="M0 .11179387h17.9577635V3.6101567H0z" />
          <path
            fill="#3D70B2"
            fillRule="nonzero"
            d="M11.800003 8.099998c-.276.276-.724.276-1 0s-.276-.724 0-1l1.2535-1.2535c-.303-.1525-.641-.2465-1.0035-.2465-1.2425 0-2.25 1.0075-2.25 2.25 0 .2255.0435.4395.105.645l-3.295 3.2945c-.4145.4155-.413 1.089.0035 1.5025.415.412 1.085.411 1.4985-.0025l3.301-3.292c.203.06.414.1025.637.1025 1.2425 0 2.25-1.0075 2.25-2.25 0-.3625-.094-.7005-.2465-1.0035l-1.2535 1.2535z"
          />
        </g>
      </svg>
    );

    let svg;
    if (type === 'Stop') {
      svg = stop;
      return (
        <Button
          className="bx--resource-header__button"
          onClick={renderStop}
          small
          icon="stop"
          kind="ghost">
          {type}
        </Button>
      );
    } else if (type === 'Reboot') {
      svg = reboot;
      return (
        <Button
          className="bx--resource-header__button"
          onClick={renderReboot}
          icon="power"
          small
          kind="ghost">
          {type}
        </Button>
      );
    } else if (type === 'Maintenance') {
      svg = maintenance;
      return (
        <Button
          className="bx--resource-header__button"
          onClick={renderMaintenance}
          small
          kind="ghost">
          {type}
          {svg}
        </Button>
      );
    }
  }

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

      return (
        <div key={i} className={statusClasses}>
          {item.text}
        </div>
      );
    });
  }

  render() {
    const {
      className,
      icon,
      renderActions,
      renderBreadcrumbs,
      renderMaintenance,
      renderReboot,
      renderStop,
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
              {renderStop && this.renderActionButtons('Stop')}
              {renderReboot && this.renderActionButtons('Reboot')}
              {renderMaintenance && this.renderActionButtons('Maintenance')}
              {renderActions && renderActions()}
            </div>
          </div>
        </section>
      </header>
    );
  }
}
