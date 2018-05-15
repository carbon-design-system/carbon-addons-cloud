import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import CloudHeaderWrapper from './CloudHeaderWrapper';
import CloudHeaderMenu from './CloudHeaderMenu';
import CloudHeaderLogo from './CloudHeaderLogo';
import CloudHeaderList from './CloudHeaderList';
import CloudHeaderListItem from './CloudHeaderListItem';

const searchIcon = (
  <svg width="20" height="20">
    <title>search</title>
    <path d="M8.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.418 4.416-.708.708-4.417-4.418a6.5 6.5 0 1 1 .707-.707z" />
  </svg>
);

const notificationIcon = (
  <svg width="20" height="20">
    <title>notification</title>
    <path d="M7.17 17H2.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .146-.354L4 12.293V9a6 6 0 0 1 5.5-5.98V1h1v2.02A6 6 0 0 1 16 9v3.293l1.854 1.853A.5.5 0 0 1 18 14.5v2a.5.5 0 0 1-.5.5h-4.67a3.001 3.001 0 0 1-5.66 0zm1.098 0a2 2 0 0 0 3.464 0H8.268zM13 16h4v-1.293l-1.854-1.853A.5.5 0 0 1 15 12.5V9A5 5 0 0 0 5 9v3.5a.5.5 0 0 1-.146.354L3 14.707V16h10z" />
  </svg>
);

const helpIcon = (
  <svg width="20" height="20">
    <title>help</title>
    <path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 1a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fillRule="nonzero" />
    <circle cx="10" cy="14" r="1" />
    <path d="M10.5 10.5V12h-1V9.5h1a1.5 1.5 0 0 0 0-3h-1A1.5 1.5 0 0 0 8 8H7a2.5 2.5 0 0 1 2.5-2.5h1a2.5 2.5 0 1 1 0 5z" />
  </svg>
);

const applicationIcon = (
  <svg viewBox="0 0 16 16">
    <title>applications</title>
    <circle cx="2" cy="2" r="2" />
    <circle cx="8" cy="2" r="2" />
    <circle cx="14" cy="2" r="2" />
    <circle cx="2" cy="8" r="2" />
    <circle cx="8" cy="8" r="2" />
    <circle cx="14" cy="8" r="2" />
    <circle cx="2" cy="14" r="2" />
    <circle cx="8" cy="14" r="2" />
    <circle cx="14" cy="14" r="2" />
  </svg>
);

const userIcon = (
  <svg width="20" height="20">
    <title>user</title>
    <path d="M6 15.745A6.968 6.968 0 0 0 10 17a6.968 6.968 0 0 0 4-1.255V15.5a2.5 2.5 0 0 0-2.5-2.5h-3A2.5 2.5 0 0 0 6 15.5v.245zm-.956-.802A3.5 3.5 0 0 1 8.5 12h3a3.5 3.5 0 0 1 3.456 2.943 7 7 0 1 0-9.912 0zM10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" /><path d="M10 9.841a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

export default class CloudHeader extends React.Component {
  state = {
    isMenuActive: false,
    isSearchActive: false,
    isNotificationActive: false,
    isHelpActive: false,
    isApplicationActive: false,
    isUserActive: false,
  };

  handleIconKeypress = type => evt => {
    if (evt.which === 13 || evt.which === 32) {
      if (evt.target.classList.contains('bx--cloud-header-list__btn')) {
        this.handleIconClick(type, evt)();
      }
    }
  };

  handleIconClick = type => evt => {
    Object.keys(this.state).forEach(key => {
      const clickType = `is${type}Active`;
      if (key === clickType) {
        this.setState({
          [clickType]: !this.state[clickType],
        });

        const propFunc = `render${type}`;
        this.props[propFunc]();
      } else {
        this.setState({
          [key]: false,
        });
      }
    });
  };

  componentDidMount() {
    this.portalNode = document.createElement('div');
    document.body.appendChild(this.portalNode);
  }

  componentWillUnmount() {
    this.portalNode.parentNode.removeChild(this.portalNode);
  }

  render() {
    const {
      className,
      companyName,
      productName,
      logoHref,
      renderMenu,
      renderLogo,
      renderSearch,
      renderNotification,
      renderHelp,
      renderApplication,
      renderUser,
      links,
      ...other
    } = this.props;

    const {
      isMenuActive,
      isSearchActive,
      isNotificationActive,
      isHelpActive,
      isApplicationActive,
      isUserActive,
    } = this.state;

    const cloudHeaderClasses = classNames('bx--cloud-header', className);

    return (
      <nav key="nav" className={cloudHeaderClasses} {...other}>
        <CloudHeaderWrapper>
          <div className="bx--cloud-header-brand-container">
            {renderMenu && (
              <CloudHeaderMenu onClick={this.handleIconClick('Menu')} />
            )}
            <CloudHeaderLogo
              className={!renderMenu ? 'bx--cloud-header-brand--no-menu' : null}
              companyName={companyName}
              productName={productName}
              href={logoHref}>
              {renderLogo && renderLogo()}
            </CloudHeaderLogo>
          </div>
          <CloudHeaderList className="bx--cloud-header-list--link">
            {links &&
              links.map((link, i) => {
                return (
                  <CloudHeaderListItem key={i} href={link.href}>
                    {link.linkText}
                  </CloudHeaderListItem>
                );
              })}
          </CloudHeaderList>
        </CloudHeaderWrapper >
        <CloudHeaderWrapper>
          {isSearchActive && renderSearch && renderSearch()}
          <CloudHeaderList className="bx--cloud-header-list--icon">
            {renderSearch && (
              <CloudHeaderListItem
                onClick={this.handleIconClick('Search')}
                onKeyDown={this.handleIconKeypress('Search')}
                ariaExpanded={this.state.isSearchActive}
                isIcon>
                {searchIcon}
              </CloudHeaderListItem>
            )}
            {renderNotification && (
              <CloudHeaderListItem
                onClick={this.handleIconClick('Notification')}
                onKeyDown={this.handleIconKeypress('Notification')}
                ariaExpanded={this.state.isNotificationActive}
                isIcon>
                {notificationIcon}
                {isNotificationActive && renderNotification()}
              </CloudHeaderListItem>
            )}
            {renderHelp && (
              <CloudHeaderListItem
                onClick={this.handleIconClick('Help')}
                onKeyDown={this.handleIconKeypress('Help')}
                ariaExpanded={this.state.isHelpActive}
                isIcon>
                {helpIcon}
                {isHelpActive && renderHelp()}
              </CloudHeaderListItem>
            )}
            {renderApplication && (
              <CloudHeaderListItem
                onClick={this.handleIconClick('Application')}
                onKeyDown={this.handleIconKeypress('Application')}
                ariaExpanded={this.state.isApplicationActive}
                isIcon>
                {applicationIcon}
                {isApplicationActive && renderApplication()}
              </CloudHeaderListItem>
            )}
            {renderUser && (
              <CloudHeaderListItem
                className="bx--cloud-header-list__item--icon"
                onClick={this.handleIconClick('User')}
                onKeyDown={this.handleIconKeypress('User')}
                ariaExpanded={this.state.isUserActive}
                isIcon>
                {userIcon}
                {isUserActive && renderUser()}
              </CloudHeaderListItem>
            )}
          </CloudHeaderList>
        </CloudHeaderWrapper>
        {isMenuActive && ReactDOM.createPortal(renderMenu(), this.portalNode)}
      </nav >
    );
  }
}
