import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TagList from '../TagList';

const tagListEvents = {
  className: 'some-class',
  tags: [{ name: "test:tag", type: 'functional'}, { name: 'test:tag', type: "functional" }, { name: "test:tag", type: 'functional' }],
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
  'Display All Editable',
  `
    TagList.
  `,
  () => (
    <TagList {...tagListEvents} condense={0} isEditable/>
  )
)
.addWithInfo(
  'Condense 1 Editable',
  `
    TagList.
  `,
  () => (
    <TagList {...tagListEvents} condense={1} isEditable/>
  )
)
.addWithInfo(
  'Condense All Not Editable',
  `
    TagList.
  `,
  () => (
    <TagList {...tagListEvents} condense={3} />
  )
)
