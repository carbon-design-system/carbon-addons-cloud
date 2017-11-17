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
          TKTK
        `,
    () => (
      <PageFilter label="Resource Groups" defaultText="None" singleSelect>
        {items.map(item => (
          <PageFilterItem
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
          TKTK
        `,
    () => (
      <PageFilter
        label="Cloud Foundry Org"
        labelPlural="Organizations"
        defaultText="None"
        multiSelect>
        {items.map(item => (
          <PageFilterItem
            itemText={item.itemText}
            value={item.value}
            checked={item.checked}
          />
        ))}
      </PageFilter>
    )
  );
