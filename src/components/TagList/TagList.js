import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import { Icon, Tag } from 'carbon-components-react';
//import Tag from './Tag';

export default class TagList extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
    condense: PropTypes.number.isRequired,
    sort: PropTypes.func,
    isEditable: PropTypes.bool,
    onIconClick: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    sort: () => {},
    isEditable: false,
    condense: 0,
  };

  render() {
    const { 
      className, 
      condense,
      isEditable, 
      onIconClick,
      sort, 
      tags, 
      ...rest } 
      = this.props;

    const sortedTags = tags.sort(sort);
 
    const limit = condense > sortedTags.length ? sortedTags.length: condense ;
  
    let displayList = [];
    for (let i = 0; i < (sortedTags.length - limit); i++) {
      displayList.push(sortedTags[i]);
    } 

    const tagListClassNames = classNames('bx--tag-list', className);

    return ( 
      <div className={tagListClassNames} {...rest}>
        {displayList.map(tag => <Tag className="bx--tag-list--tag" type={tag.type}>{tag.name}</Tag>)}
        {condense > 0 && condense < sortedTags.length && (
          <Tag type="beta" className="bx--tag-list--tag-counter"> 
            <Icon
              name="add"
              className="bx--tag-list--tag-counter--icon"
            />  
            {condense}
          </Tag>
        )}
        {condense >= tags.length && (
          <Tag type="beta" className="bx--tag-list--tag-counter" > 
            {tags.length}
          </Tag>
        )}
        {isEditable && 
          <Icon
            name="edit--glyph"
            onClick={() => onIconClick}
            onKeyDown={() => onIconClick}
            className="bx--tag-list--edit--icon"
            role="button"
            tabIndex='0'
          />}
      </div>
    );
  }
}