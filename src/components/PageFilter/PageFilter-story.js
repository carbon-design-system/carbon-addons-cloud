import React from 'react';
import { storiesOf } from '@storybook/react';
import PageFilter from '../PageFilter';
import PageFilterItem from '../PageFilterItem';

const items = [
  { itemText: 'my-org-1', value: 'my-org-1', checked: false },
  { itemText: 'my-org-2', value: 'my-org-2', checked: true },
  { itemText: 'my-org-3', value: 'my-org-3', checked: false },
];

storiesOf('PageFilter', module)
  .addDecorator(story => <div style={{ width: '20em' }}>{story()}</div>)
  .addWithInfo(
    'Single Select',
    `
          Single-select page filter.
        `,
    () => (
      <PageFilter
        label="Resource Group"
        labelPlural="Resource Groups"
        defaultText="None"
        type="single-select">
        {items.map(item => (
          <PageFilterItem
            key={item.value}
            itemText={item.itemText}
            value={item.value}
            checked={item.checked}
          />
        ))}
      </PageFilter>
    )
  )
  .addWithInfo(
    'Multi Select',
    `
          Multi-select page filter.
        `,
    () => (
      <PageFilter
        label="Cloud Foundry Org"
        labelPlural="Organizations"
        defaultText="None"
        type="multi-select">
        {items.map(item => (
          <PageFilterItem
            key={item.value}
            itemText={item.itemText}
            value={item.value}
            checked={item.checked}
          />
        ))}
      </PageFilter>
    )
  )
  .addWithInfo(
    'Disabled',
    `
        Disabled page-filter.
      `,
    () => (
      <PageFilter
        label="Region"
        labelPlural="Regions"
        defaultText="None"
        disabled
      />
    )
  );
