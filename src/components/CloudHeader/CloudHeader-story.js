import React from 'react';
import { storiesOf } from '@storybook/react';
import CloudHeader from './CloudHeader';
import CloudHeaderContainer from './CloudHeaderContainer';
import CloudHeaderMenu from './CloudHeaderMenu';
import CloudHeaderLogo from './CloudHeaderLogo';
import CloudHeaderList from './CloudHeaderList';
import CloudHeaderListItem from './CloudHeaderListItem';

storiesOf('CloudHeader', module).addWithInfo(
  'default',
  `
      Basic implementation of the Cloud Header
    `,
  () => (
    <CloudHeader>
      <CloudHeaderContainer>
        <CloudHeaderMenu />
        <CloudHeaderLogo>
          <svg fill="#fff" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4.6c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm7 14.5c-1.8 1.8-4.3 2.9-7 2.9s-5.2-1.1-7-2.9v-1.6c0-1.3.7-2 2-2h10c1.3 0 2 .7 2 2v1.6z" />
          </svg>
        </CloudHeaderLogo>
        <CloudHeaderList>
          <CloudHeaderListItem>Catalog</CloudHeaderListItem>
          <CloudHeaderListItem>Support</CloudHeaderListItem>
          <CloudHeaderListItem>Manage</CloudHeaderListItem>
        </CloudHeaderList>
      </CloudHeaderContainer>
      <CloudHeaderContainer>
        <CloudHeaderListItem isIcon>
          <svg viewBox="0 0 16 16" fill-rule="evenodd">
            <title>search</title>
            <path d="M6 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0-2C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm10 13.8L13.8 16l-3.6-3.6 2.2-2.2z" />
            <path d="M16 13.8L13.8 16l-3.6-3.6 2.2-2.2z" />
          </svg>
        </CloudHeaderListItem>
        <CloudHeaderListItem isIcon>
          <svg width="16" height="16">
            <title>notifications</title>
            <path d="M9 1.11V0H7v1.11A5.022 5.022 0 0 0 3.1 4.9L1 14h5a2 2 0 0 0 4 0h5l-2.1-9.1A5.022 5.022 0 0 0 9 1.11z" />
          </svg>
        </CloudHeaderListItem>
        <CloudHeaderListItem isIcon>
          <svg width="16" height="16">
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
        </CloudHeaderListItem>
        <CloudHeaderListItem isIcon>
          <svg viewBox="0 0 24 24">
            <title>user</title>
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4.6c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm7 14.5c-1.8 1.8-4.3 2.9-7 2.9s-5.2-1.1-7-2.9v-1.6c0-1.3.7-2 2-2h10c1.3 0 2 .7 2 2v1.6z" />
          </svg>
        </CloudHeaderListItem>
      </CloudHeaderContainer>
    </CloudHeader>
  )
);
