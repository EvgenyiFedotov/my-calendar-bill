import * as React from 'react';

import List from '../../List';
import AppContext from '../../contexts/App/context';
import Column from '../../styled/Column';
import Button from '../../styled/Button';
import Modal from '../../Modal';
import EditListItem from '../../EditListItem';
import InputText from '../../styled/InputText';
import CalendarNumbers from '../CalendarNumbers';

const ListChangesBill = () => {
  const {
    changesBill: { items, item, createItem, clearItem, saveItem, editItem },
  } = React.useContext(AppContext);
  const nameRef = React.useRef();
  const typeRef = React.useRef();
  const dateRef = React.useRef();
  const countRef = React.useRef();
  const save = React.useCallback(() => {
    const name = nameRef.current.value.trim();
    const type = typeRef.current.value.trim();
    const date = dateRef.current.getSelectedDate();
    const count = countRef.current.value;

    if (name) saveItem({ name, type, date, count });
  }, [nameRef, saveItem]);

  return (
    <Column>
      <Button onClick={createItem({ name: `Change_bill #${items.length}` })}>Add</Button>

      <List
        items={items}
        getPropsItem={(item, index) => ({
          onClick: editItem(index),
          justifyContent: 'space-between',
        })}
        getContentItem={({ name, type, date, count }) => (
          <>
            <div>{name}</div>
            <div>{type}</div>
            <div>{date}</div>
            <div>{count}</div>
          </>
        )}
      />

      {!!item && (
        <Modal onClose={clearItem}>
          <EditListItem
            title="Edit change bill"
            isNew={item.isNew}
            onCancel={clearItem}
            onSave={save}
          >
            <InputText defaultValue={item.name} placeholder="Name" ref={nameRef} />
            <CalendarNumbers ref={dateRef} defaultSelectedDate={item.date} />
            <InputText defaultValue={item.type || 'in'} placeholder="Type" ref={typeRef} />
            <InputText defaultValue={item.count} placeholder="Count" type="number" ref={countRef} />
          </EditListItem>
        </Modal>
      )}
    </Column>
  );
};

export default ListChangesBill;
