import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag, { types } from '../Tag';

storiesOf('Tag', module)
  .addWithInfo(
    'Default Tag',
    `
        Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.
        The example below shows how the Tag component can be used. Each type has a default message describing the type,
        but a custom message can also be applied.
      `,
    () => (
      <div>
        <div>
          <Tag type="functional">Tag</Tag>
        </div>
      </div>
    )
  )
  .addWithInfo(
    'Removable Tag',
    `
        Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.
        The example below shows how the Tag component can be used. Each type has a default message describing the type,
        but a custom message can also be applied.
      `,
    () => (
      <div>
        <div>
          <Tag type="functional" isRemovable={true}>
            Tag
          </Tag>
        </div>
      </div>
    )
  );
