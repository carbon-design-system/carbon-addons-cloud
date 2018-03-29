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

const logo = (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 275.76529 243.9836">
    <defs>
      <linearGradient
        id="a"
        x1="4979.474"
        y1="10122.533"
        x2="5087.703"
        y2="10103.45"
        gradientTransform="scale(-1 1) rotate(-45 -9605.065 11330.987)"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" offset=".2" stopOpacity="0" />
        <stop stopColor="#fff" offset=".287" stopOpacity=".03" />
        <stop stopColor="#fff" offset=".501" stopOpacity=".2" />
        <stop stopColor="#fff" offset=".793" stopOpacity=".742" />
        <stop stopColor="#fff" offset="1" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="-.357"
        y1="51.748"
        x2="63.087"
        y2="88.378"
        gradientTransform="matrix(1 0 0 -1 -5.791 224.135)"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" offset=".08" />
        <stop stopColor="#fff" offset=".753" stopOpacity=".07" />
        <stop stopColor="#fff" offset=".875" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="144.665"
        y1="44.837"
        x2="241.172"
        y2="125.816"
        gradientTransform="matrix(1 0 0 -1 -5.791 224.135)"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" offset=".138" stopOpacity="0" />
        <stop stopColor="#fff" offset=".32" stopOpacity=".07" />
        <stop stopColor="#fff" offset=".847" stopOpacity=".764" />
        <stop stopColor="#fff" offset=".947" />
      </linearGradient>
    </defs>
    <path
      fill="#fff"
      d="M36.697 97.367a5.195 5.195 0 0 1-2.604-.7L9.19 82.288a5.217 5.217 0 1 1 5.217-9.037L39.31 87.63a5.218 5.218 0 0 1-2.613 9.737zm42.596-42.586a5.215 5.215 0 0 1-4.524-2.61L60.39 27.268a5.218 5.218 0 0 1 9.037-5.218l14.38 24.905a5.219 5.219 0 0 1-4.514 7.827zm58.167-15.589a5.217 5.217 0 0 1-5.217-5.217V5.217a5.218 5.218 0 0 1 10.435 0v28.758a5.217 5.217 0 0 1-5.217 5.217zm58.17 15.589a5.219 5.219 0 0 1-4.514-7.827l14.379-24.905a5.218 5.218 0 0 1 9.037 5.218l-14.379 24.905a5.216 5.216 0 0 1-4.523 2.61zm42.595 42.586a5.218 5.218 0 0 1-2.613-9.737l24.904-14.379a5.217 5.217 0 1 1 5.217 9.037L240.83 96.667a5.195 5.195 0 0 1-2.604.7z"
    />
    <path
      fill="url(#a)"
      d="M71.232 216.548A93.66 93.66 0 0 1 203.687 84.09a95.03 95.03 0 0 1 7.451 8.388 93.907 93.907 0 0 1 4.55 6.303l-8.709 5.748a83.29 83.29 0 0 0-4.04-5.597 84.494 84.494 0 0 0-6.628-7.46 83.226 83.226 0 0 0-117.698 117.7z"
    />
    <path
      fill="#fff"
      d="M204.23 243.984c-.183 0-.364 0-.548-.002h-143.6a60.495 60.495 0 0 1-60.08-60.944l10.435.078a50.058 50.058 0 0 0 49.685 50.43h143.6c.152.002.31.003.462.003a61.117 61.117 0 0 0 45.582-101.861l7.778-6.957a71.552 71.552 0 0 1-53.315 119.253z"
    />
    <path
      fill="url(#b)"
      d="M10.437 183.116l-10.435-.078a60.43 60.43 0 0 1 50.409-59.207l1.742 10.29a50.006 50.006 0 0 0-41.716 48.995z"
    />
    <path
      fill="url(#c)"
      d="M143.102 171.978l-10.435-.079a71.55 71.55 0 0 1 124.877-47.169l-7.778 6.957a61.115 61.115 0 0 0-106.664 40.29z"
    />
  </svg>
);

const customMenuIcon = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill-rule='evenodd'><path d='M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0-2C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z'></path><path d='M8.3 10c.2-2 1.5-3.5 3.7-3.5 2.8 0 3.7 1.8 3.7 2.9 0 2.9-2.5 2.5-2.7 4.3V15h-2v-1c.2-2.6 2.4-2.8 2.3-4.4 0-.9-.5-1.3-1.3-1.3-1 0-1.5.8-1.5 1.7H8.3zm2.7 6h2v2h-2v-2z'></path></svg>
)

storiesOf('CloudHeader', module).addWithInfo(
  'default',
  'Basic implementation of the Cloud Header',
  () => {
    return (
      <CloudHeader
        companyName="IBM"
        productName="Cloud"
        logoHref="https://www.ibm.com/cloud/"
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
        renderApplication={() => (
          <ul className="list">
            <li>
              <Link href="www.google.com">Application 1</Link>
            </li>
            <li>
              <Link href="www.google.com">Application 2</Link>
            </li>
            <li>
              <Link href="www.google.com">Application 3</Link>
            </li>
            <li>
              <Link href="www.google.com">Application 4</Link>
            </li>
            <li>
              <Link href="www.google.com">Application 5</Link>
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
        renderLogo={() => logo}
        links={[
          { href: 'www.google.com', linkText: 'Catalog' },
          { href: 'www.google.com', linkText: 'Support' },
          { href: 'www.google.com', linkText: 'Manage' },
        ]}
      />
    );
  }
).addWithInfo(
  'with custom menu',
  'Supply a custom menu icon and a render for a custom menu',
  () => {
    return (
      <CloudHeader
        companyName="IBM"
        productName="Cloud"
        logoHref="https://www.ibm.com/cloud/"
        renderMenu={() => <span>Menu</span>}
        renderApplication={() => (
          <ul className="list">
            <li>
              <Link href="www.google.com">Application 1</Link>
            </li>
            <li>
              <Link href="www.google.com">Application 2</Link>
            </li>
            <li>
              <Link href="www.google.com">Application 3</Link>
            </li>
            <li>
              <Link href="www.google.com">Application 4</Link>
            </li>
            <li>
              <Link href="www.google.com">Application 5</Link>
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
        customMenuIcon={customMenuIcon}
        renderCustomMenu={() => (
          <ul className="list">
            <li>
              <Link href="#">Documentation</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        )}
        renderLogo={() => logo}
        links={[
          { href: 'www.google.com', linkText: 'Catalog' },
          { href: 'www.google.com', linkText: 'Support' },
          { href: 'www.google.com', linkText: 'Manage' },
        ]}
      />
    );
  }
)
