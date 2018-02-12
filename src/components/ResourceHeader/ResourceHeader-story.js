import React from 'react';
import { storiesOf } from '@storybook/react';
import { ResourceHeader } from './ResourceHeader';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';

storiesOf('ResourceHeader', module).addWithInfo(
  'Default',
  `
      This component is used to display the items a user will be purchasing. This version does not include OrderSummaryCategory.
    `,
  () => {
    const resourceHeaderProps = {
      title: 'Resource Name',
      subtitle: ['Supporting Content', 'Datacenter', 'XX GB', 'Lorem Ipsum'],
    };

    return (
      <ResourceHeader
        renderBreadcrumbs={() => (
          <Breadcrumb>
            <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
          </Breadcrumb>
        )}
        {...resourceHeaderProps}
      />
    );
  }
);
