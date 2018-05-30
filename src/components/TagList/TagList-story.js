import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TagList from '../TagList';

const tagListEvents = {
  className: 'some-class',
  tagClassName: 'some-other-class',
  tags: [{ name: 'test:tag', type: 'functional', className: 'tag-one'}, { name: 'tag:test', type: 'functional', className: 'tag-two'}, { name: 'tag', type: 'functional', className: 'tag-three'}],
}
storiesOf('TagList', module)
.addWithInfo(
  'Default',
  `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component is displayed in a default state.
  `,
  () => (
    <TagList {...tagListEvents} />
  )
)
.addWithInfo(
  'Display All Editable',
  `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component can be used in an editable state.
  `,
  () => (
    <TagList {...tagListEvents} condense={0} isEditable/>
  )
)
.addWithInfo(
  'Condense 1 Editable',
  `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component can be used to condense a list.
  `,
  () => (
    <TagList {...tagListEvents} condense={1} isEditable/>
  )
)
.addWithInfo(
  'Fully Condensed',
  `
    A TagList is used to manage multiple tags at once. The example below shows how the TagList component can be used in a fully condensed state.
  `,
  () => (
    <TagList {...tagListEvents} condense={3} />
  )
)
