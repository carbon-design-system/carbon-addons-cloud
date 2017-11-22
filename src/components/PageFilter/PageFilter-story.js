import React from 'react';
import { storiesOf } from '@storybook/react';
import PageFilter from '../PageFilter';
import PageFilterItem from '../PageFilterItem';

const rgItems = [
  { itemText: 'Resource Group 1', value: 'rg-1', checked: true },
  { itemText: 'Resource Group 2', value: 'rg-2', checked: false },
  { itemText: 'Resource Group 3', value: 'rg-3', checked: false },
];

const orgItems = [
  { itemText: 'My Org 1', value: 'my-org-1', checked: false },
  { itemText: 'My Org 2', value: 'my-org-2', checked: true },
  { itemText: 'My Org 3', value: 'my-org-3', checked: false },
];

const containerStyles = {
  alignItems: 'center',
  backgroundColor: 'white',
  display: 'flex',
  padding: '1rem',
};

storiesOf('PageFilter', module)
  .addDecorator(story => <div style={{ width: '100%' }}>{story()}</div>)
  .addWithInfo(
    'Single Select',
    `
          Single-select page filter.
        `,
    () => (
      <div style={containerStyles}>
        <PageFilter
          label="Resource Group"
          defaultText="None"
          type="single-select">
          {rgItems.map(item => (
            <PageFilterItem
              key={item.value}
              itemText={item.itemText}
              value={item.value}
              checked={item.checked}
            />
          ))}
        </PageFilter>
      </div>
    )
  )
  .addWithInfo(
    'Multi Select',
    `
          Multi-select page filter.
        `,
    () => (
      <div style={containerStyles}>
        <PageFilter
          label="Cloud Foundry Org"
          labelPlural="Organizations"
          defaultText="None"
          type="multi-select">
          {orgItems.map(item => (
            <PageFilterItem
              key={item.value}
              itemText={item.itemText}
              value={item.value}
              checked={item.checked}
            />
          ))}
        </PageFilter>
      </div>
    )
  )
  .addWithInfo(
    'Disabled',
    `
        Disabled page-filter.
      `,
    () => (
      <div style={containerStyles}>
        <PageFilter label="Region" defaultText="None" disabled />
      </div>
    )
  );
