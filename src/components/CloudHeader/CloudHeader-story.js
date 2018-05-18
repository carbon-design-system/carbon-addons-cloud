import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CloudHeader from './CloudHeader';
import CloudHeaderWrapper from './CloudHeaderWrapper';
import CloudHeaderMenu from './CloudHeaderMenu';
import CloudHeaderLogo from './CloudHeaderLogo';
import CloudHeaderList from './CloudHeaderList';
import CloudHeaderListItem from './CloudHeaderListItem';
import { Search, Link } from 'carbon-components-react';

storiesOf('CloudHeader', module).addWithInfo(
  'default',
  `
      Basic implementation of the Cloud Header
    `,
  () => {
    return (
      <CloudHeader
        companyName="IBM"
        productName="Cloud"
        logoHref="https://www.ibm.com/cloud/"
        links={[
          { href: 'www.google.com', linkText: 'Catalog' },
          { href: 'www.google.com', linkText: 'Support' },
          { href: 'www.google.com', linkText: 'Manage' },
        ]}
        renderMenu={() => <span>Menu</span>}
        renderSearch={() => (
          <Search
            className="some-class"
            small
            id="search-2"
            labelText="Search"
            placeHolderText="Search"
          />
        )}
        renderNotification={() => (
          <ul className="list">
            <li>
              <Link href="www.google.com">Notification 1</Link>
            </li>
            <li>
              <Link href="www.google.com">Notification 2</Link>
            </li>
            <li>
              <Link href="www.google.com">Notification 3</Link>
            </li>
            <li>
              <Link href="www.google.com">Notification 4</Link>
            </li>
            <li>
              <Link href="www.google.com">Notification 5</Link>
            </li>
          </ul>
        )}
        renderHelp={() => (
          <ul className="list">
            <li>
              <Link href="www.google.com">Help 1</Link>
            </li>
            <li>
              <Link href="www.google.com">Help 2</Link>
            </li>
            <li>
              <Link href="www.google.com">Help 3</Link>
            </li>
            <li>
              <Link href="www.google.com">Help 4</Link>
            </li>
            <li>
              <Link href="www.google.com">Help 5</Link>
            </li>
          </ul>
        )}
        renderUser={() => (
          <ul className="list">
            <li>
              <Link href="www.google.com">User 1</Link>
            </li>
            <li>
              <Link href="www.google.com">User 2</Link>
            </li>
            <li>
              <Link href="www.google.com">User 3</Link>
            </li>
            <li>
              <Link href="www.google.com">User 4</Link>
            </li>
            <li>
              <Link href="www.google.com">User 5</Link>
            </li>
          </ul>
        )}
      />
    );
  }
);
