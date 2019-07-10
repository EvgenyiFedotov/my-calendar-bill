import * as React from 'react';

import Modal from '../../Modal';
import EditListItem from '../../EditListItem';
import InputText from '../../styled/InputText';
import useKeycode from '../../../hooks/use-keycode';
import useList from '../../../hooks/use-list';

import Content from './styled/Content';
import ListDates from './ListDates';

/**
 * Component `EditBill`
 * @param {ReturnHook:useList} usedList
 */
const EditBill = ({ usedList: { clearItem, item, saveItem, deleteItem } }) => {
  const nameRef = React.useRef();
  const datesIn = useList(item && item.datesIn);
  const datesOut = useList(item && item.datesOut);
  const save = React.useCallback(() => {
    const name = nameRef.current.value.trim();
    if (name) saveItem({ name, datesIn: datesIn.items, datesOut: datesOut.items });
  }, [saveItem, datesIn.items, datesOut.items]);
  const pressEnter = useKeycode(13, save);

  return (
    <Modal onClose={clearItem}>
      <EditListItem
        isNew={!Object.keys(item).length}
        title="Bill"
        onCancel={clearItem}
        onSave={save}
        onDelete={deleteItem}
      >
        <Content>
          <InputText
            ref={nameRef}
            placeholder="Name"
            defaultValue={item && item.name}
            onKeyDown={pressEnter}
          />
          <ListDates title="Dates in" usedList={datesIn} />
          <ListDates title="Dates out" usedList={datesOut} />
        </Content>
      </EditListItem>
    </Modal>
  );
};

export default EditBill;
