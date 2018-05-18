import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TagList from '../TagList';

const tagListEvents = {
  className: 'some-class',
  tags: [{ name: "test:test", type: 'beta'}, { name: 'acb:efg', type: "beta" }, { name: "hello:goodbye", type: 'beta' }],
}
storiesOf('TagList', module)
.addWithInfo(
  'Default',
  `
    TagList.
  `,
  () => (
    <TagList {...tagListEvents} />
  )
)
.addWithInfo(
  'Condense All Editable',
  `
    TagList.
  `,
  () => (
    <TagList {...tagListEvents} isEditable/>
  )
)
.addWithInfo(
  'Display All Editable',
  `
    TagList.
  `,
  () => (
    <TagList {...tagListEvents} condense={0} isEditable/>
  )
)
.addWithInfo(
  'condense 2',
  `
    TagList.
  `,
  () => (
    <TagList {...tagListEvents} condense={2} />
  )
)
  .addWithInfo(
    'condense 3',
    `
      TagList.
    `,
    () => (
      <TagList {...tagListEvents} condense={3} isEditable/>
    )
  )
  .addWithInfo(
    'Overflow',
    `
      TagList.
    `,
    () => (
      <TagList {...tagListEvents} condense={4} />
    )
  )
