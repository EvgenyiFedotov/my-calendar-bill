import * as React from 'react';

import Column from '../styled/Column';
import ItemList from '../styled/ItemList';

/**
 * Component `List`
 * @param {Array<any>} items
 * @param {(item: any, index: number, items: Array<any>) => Object | undefined} [getPropsItem=() => {}]
 * @param {(item: any, index: number, items: Array<any>) => any} [getContentItem=() => null]
 * @param {string} [messageListEmpty='List is empty']
 */
const List = ({
  items,
  getPropsItem = () => {},
  getContentItem = () => null,
  messageListEmpty = 'List is empty',
}) => {
  return (
    <Column>
      {!!items.length &&
        items.map((item, index) => (
          <ItemList {...getPropsItem(item, index, items)} key={index}>
            {getContentItem(item, index, items)}
          </ItemList>
        ))}
      {!items.length && <i>{messageListEmpty}</i>}
    </Column>
  );
};

export default List;
