import * as React from 'react';

import Styled from './styled';
import ItemList from './styled/ItemList';

/**
 * Component `List`
 * @param {Map<[string, any]>} items
 * @param
 * @param {(item: any, index: number, items: Array<any>) => Object | undefined} [getPropsItem=() => {}]
 * @param {(item: any, index: number, items: Array<any>) => any} [getContentItem=() => null]
 * @param {string} [messageListEmpty='List is empty']
 */
const List = ({
  items,
  ComponentItem = ItemList,
  getItemProps = () => {},
  messageListEmpty = 'List is empty',
  ...props
}) => (
  <Styled {...props}>
    {!!items.size &&
      Array.from(items).map((item, index) => (
        <ItemList {...getItemProps(item, index, items)} key={item[0]} />
      ))}
    {!items.size && <i>{messageListEmpty}</i>}
  </Styled>
);

export default List;
