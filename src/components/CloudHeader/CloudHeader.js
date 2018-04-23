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
  <svg viewBox="0 0 16 16" fillRule="evenodd">
    <title>search</title>
    <path d="M6 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0-2C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm10 13.8L13.8 16l-3.6-3.6 2.2-2.2z" />
    <path d="M16 13.8L13.8 16l-3.6-3.6 2.2-2.2z" />
  </svg>
);

const notificationIcon = (
  <svg viewBox="0 0 16 16">
    <title>notifications</title>
    <path d="M9 1.11V0H7v1.11A5.022 5.022 0 0 0 3.1 4.9L1 14h5a2 2 0 0 0 4 0h5l-2.1-9.1A5.022 5.022 0 0 0 9 1.11z" />
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
  <svg className="bx--cloud-header__user-icon" viewBox="0 0 24 24">
    <title>user</title>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4.6c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm7 14.5c-1.8 1.8-4.3 2.9-7 2.9s-5.2-1.1-7-2.9v-1.6c0-1.3.7-2 2-2h10c1.3 0 2 .7 2 2v1.6z" />
  </svg>
);

export default class CloudHeader extends React.Component {
  state = {
    isMenuActive: false,
    isSearchActive: false,
    isNotificationActive: false,
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

  handleBlur = cb => evt => {
    evt.stopPropagation();
    const rel = evt.relatedTarget;
    const currentDMTattr = evt.currentTarget.getAttribute('data-menu-type');
    const parentOpen = [...document.querySelectorAll(`[data-menu-type="${currentDMTattr}"]`)]
      .filter(i => i.hasAttribute('aria-expanded'))[0]
      .getAttribute('aria-expanded');
    const related = rel ? rel.closest(`[data-menu-type="${currentDMTattr}"]`) : null;
    const directSib = rel ? evt.currentTarget.parentNode === evt.relatedTarget.parentNode : false;


    if (
      (rel === null && parentOpen === 'true')
      ||
      (rel !== null && !related && !directSib && parentOpen === 'true')
    ) {
      cb()
    }
  }

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
      renderApplication,
      renderUser,
      links,
      ...other
    } = this.props;

    const {
      isMenuActive,
      isSearchActive,
      isNotificationActive,
      isApplicationActive,
      isUserActive,
    } = this.state;

    const cloudHeaderClasses = classNames('bx--cloud-header', className);

    const cloudHeadSearch = () => React.cloneElement(renderSearch(), {
      onBlur: this.handleBlur(this.handleIconClick('Search')),
      "data-menu-type": 'Search',
    });
    const cloudHeadNotification = () => React.cloneElement(renderNotification(), {
      onBlur: this.handleBlur(this.handleIconClick('Notification')),
      "data-menu-type": 'Notification',
    });
    const cloudHeadApplication = () => React.cloneElement(renderApplication(), {
      onBlur: this.handleBlur(this.handleIconClick('Application')),
      "data-menu-type": 'Application',
    });
    const cloudHeadUser = () => React.cloneElement(renderUser(), {
      onBlur: this.handleBlur(this.handleIconClick('User')),
      "data-menu-type": 'User',
    });

    return (
      <nav key="nav" className={cloudHeaderClasses} {...other}>
        <CloudHeaderWrapper>
          {renderMenu && (
            <CloudHeaderMenu
            onClick={this.handleIconClick('Menu')}
            />
          )}
          <CloudHeaderLogo
            className={!renderMenu ? 'bx--cloud-header-brand--no-menu' : null}
            companyName={companyName}
            productName={productName}
            href={logoHref}>
            {renderLogo && renderLogo()}
          </CloudHeaderLogo>
          <CloudHeaderList>
            {links &&
              links.map((link, i) => {
                return (
                  <CloudHeaderListItem key={i} href={link.href}>
                    {link.linkText}
                  </CloudHeaderListItem>
                );
              })}
          </CloudHeaderList>
        </CloudHeaderWrapper>
        <CloudHeaderWrapper>
          {isSearchActive && cloudHeadSearch && cloudHeadSearch()}
          <CloudHeaderList>

            {cloudHeadSearch && (
              <CloudHeaderListItem
                data-menu-type="Search"
                onBlur={this.handleBlur(this.handleIconClick('Search'))}
                onClick={this.handleIconClick('Search')}
                onKeyDown={this.handleIconKeypress('Search')}
                ariaExpanded={this.state.isSearchActive}
                isIcon>
                {searchIcon}
              </CloudHeaderListItem>
            )}
            {cloudHeadNotification && (
              <CloudHeaderListItem
                data-menu-type="Notification"
                onBlur={this.handleBlur(this.handleIconClick('Notification'))}
                onClick={this.handleIconClick('Notification')}
                onKeyDown={this.handleIconKeypress('Notification')}
                ariaExpanded={this.state.isNotificationActive}
                isIcon>
                {notificationIcon}
                {isNotificationActive && cloudHeadNotification()}
              </CloudHeaderListItem>
            )}
            {cloudHeadApplication && (
              <CloudHeaderListItem
                data-menu-type="Application"
                onBlur={this.handleBlur(this.handleIconClick('Application'))}
                onClick={this.handleIconClick('Application')}
                onKeyDown={this.handleIconKeypress('Application')}
                ariaExpanded={this.state.isApplicationActive}
                isIcon>
                {applicationIcon}
                {isApplicationActive && cloudHeadApplication()}
              </CloudHeaderListItem>
            )}
            {cloudHeadUser && (
              <CloudHeaderListItem
                data-menu-type="User"
                onBlur={this.handleBlur(this.handleIconClick('User'))}
                onClick={this.handleIconClick('User')}
                onKeyDown={this.handleIconKeypress('User')}
                ariaExpanded={this.state.isUserActive}
                isIcon>
                {userIcon}
                {isUserActive && cloudHeadUser()}
              </CloudHeaderListItem>
            )}
          </CloudHeaderList>
        </CloudHeaderWrapper>
        {isMenuActive && ReactDOM.createPortal(renderMenu(), this.portalNode)}
      </nav>
    );
  }
}
