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
          <Tag type="functional" children={'Tag'} />
        </div>
      </div>
    )
  )
  .addWithInfo(
    'Key:Value Tag with max characters',
    `
        Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.
        The example below shows how the Tag component can be used. Each type has a default message describing the type,
        but a custom message can also be applied. Tags can be applied a max number of characters. This tag has a max of
        10 characters. Key:value tags are truncated in the middle.
      `,
    () => (
      <div>
        <div>
          <Tag type="functional" maxCharacters="10" children={'acct:costCtr'} />
        </div>
      </div>
    )
  )
  .addWithInfo(
    'Regular Tag with max characters',
    `
        Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.
        The example below shows how the Tag component can be used. Each type has a default message describing the type,
        but a custom message can also be applied. Tags can be applied a max number of characters. This tag has a max of
        10 characters. Regular tags are truncated at the end.
      `,
    () => (
      <div>
        <div>
          <Tag type="functional" maxCharacters="10" children={'long tag over 10 characters'} />
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
