import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import { Icon } from 'carbon-components-react';
import Tag from '../Tag';

export default class TagList extends Component {
  static propTypes = {
    condense: PropTypes.number.isRequired,
    className: PropTypes.string,
    isEditable: PropTypes.bool,
    onIconClick: PropTypes.func,
    sort: PropTypes.func,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['functional', '...']).isRequired,
        className: PropTypes.string.isRequired,
      })
    ).isRequired,
    tagClassName: PropTypes.string,
  };

  static defaultProps = {
    sort: () => {},
    isEditable: false,
    condense: 0,
  };

  render() {
    const { 
      className,
      tagClassName,
      condense,
      isEditable, 
      onIconClick,
      sort, 
      tags, 
      ...rest } 
      = this.props;

    const sortedTags = tags.sort(sort);
 
    const limit = condense > sortedTags.length ? sortedTags.length : condense;
  
    const displayList = sortedTags.slice(0, sortedTags.length - limit);

    const tagListClassNames = classNames('bx--tag-list', className);
    const tagClassNames = classNames('bx--tag-list--tag', tagClassName);
    const tagCounterClassNames = classNames('bx--tag-list--tag-counter', tagClassNames);

    return ( 
      <div className={tagListClassNames} {...rest}>
        {displayList.map(tag => <Tag key={tag.name} className={`${tag.className} ${tagClassNames}`} type={tag.type}>{tag.name}</Tag>)}
        {condense > 0 && condense < sortedTags.length && (
          <Tag type="functional" className={tagCounterClassNames}> 
            <Icon
              name="add"
              className="bx--tag-list--tag-counter--icon"
              title="add icon"
              description="add icon used to indicate additional condensed tags"
            />  
            {condense}
          </Tag>
        )}
        {condense >= tags.length && (
          <Tag type="functional" className={tagCounterClassNames} > 
            {tags.length}
          </Tag>
        )}
        {isEditable &&
          <button className="bx--tag-list--edit--button" onClick={onIconClick}>
            <Icon
              name="edit--glyph"
              className="bx--tag-list--edit--icon"
              title="edit icon"
              description="edit icon that can trigger an editable state for the tags in list"
            />
          </button>}
      </div>
    );
  }
}