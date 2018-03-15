import React from 'react';
import { storiesOf } from '@storybook/react';
import InteriorLeftNav from '../InteriorLeftNav';
import InteriorLeftNavHeader from '../InteriorLeftNavHeader';
import InteriorLeftNavItem from '../InteriorLeftNavItem';
import InteriorLeftNavList from '../InteriorLeftNavList';
import { Icon } from 'carbon-components-react';

storiesOf('InteriorLeftNav', module).addWithInfo(
  'Default',
  `
      Interior left navigation organizes the content structure and provides
      context to support user orientation. This pattern accommodates the
      breadth of content and tasks users expect to see.
    `,
  () => (
    <InteriorLeftNav>
      <InteriorLeftNavList title="Example Item 1">
        <InteriorLeftNavItem href="#example-item-1A">
          <a href="http://www.carbondesignsystem.com">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-1B">
          <a href="http://www.carbondesignsystem.com">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-1C">
          <a href="http://www.carbondesignsystem.com">Link Child</a>
        </InteriorLeftNavItem>
      </InteriorLeftNavList>
      <InteriorLeftNavList title="Example Item 2">
        <InteriorLeftNavItem href="#example-item-2A">
          <a href="http://www.carbondesignsystem.com">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-2B">
          <a href="http://www.carbondesignsystem.com">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-2C">
          <a href="http://www.carbondesignsystem.com">Link Child</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem href="#example-item-2D">
          <a href="http://www.carbondesignsystem.com">Link Child</a>
        </InteriorLeftNavItem>
      </InteriorLeftNavList>
      <InteriorLeftNavItem href="#example-item-3" label="Link Label" />
      <InteriorLeftNavItem href="#example-item-4" label="Link Label" />
    </InteriorLeftNav>
  )
).addWithInfo(
  'With header',
  `
      You can optionally add a header with an icon and a title, indicating the product area.
      This should be applied only to product-area-level interior left navivation.
    `,
  () => {
    const icon = (
      <Icon name="icon--services" className="bx--interior-left-nav__header__icon" />
    );
    return (
      <InteriorLeftNav>
        <InteriorLeftNavHeader icon={icon}>Product</InteriorLeftNavHeader>
        <InteriorLeftNavList title="Example Item 1">
          <InteriorLeftNavItem href="#example-item-1A">
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem href="#example-item-1B">
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem href="#example-item-1C">
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
        </InteriorLeftNavList>
        <InteriorLeftNavList title="Example Item 2">
          <InteriorLeftNavItem href="#example-item-2A">
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem href="#example-item-2B">
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem href="#example-item-2C">
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem href="#example-item-2D">
            <a href="http://www.carbondesignsystem.com">Link Child</a>
          </InteriorLeftNavItem>
        </InteriorLeftNavList>
        <InteriorLeftNavItem href="#example-item-3" label="Link Label" />
        <InteriorLeftNavItem href="#example-item-4" label="Link Label" />
      </InteriorLeftNav>
    );
  }
);
