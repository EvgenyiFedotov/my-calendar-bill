import * as React from 'react';

import List from '../../List';
import AppContext from '../../contexts/App/context';
import Column from '../../styled/Column';
import Button from '../../styled/Button';
import Modal from '../../Modal';
import EditListItem from '../../EditListItem';
import InputText from '../../styled/InputText';
import CalendarNumbers from '../CalendarNumbers';
import Row from '../../styled/Row';

const ListChangesBill = () => {
  const {
    changesBill: {
      items,
      item: [keyItem, item],
      createItem,
      clearItem,
      saveItem,
      editItem,
      deleteItem,
    },
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

    if (name && type && date && count) saveItem({ name, type, date, count });
  }, [nameRef, saveItem]);

  return (
    <Column>
      <Button onClick={createItem({ name: `Change_bill #${items.size}` })}>Add</Button>

      <List
        items={items}
        getPropsItem={([key]) => ({
          onClick: editItem(key),
          justifyContent: 'space-between',
        })}
        getContentItem={([, { name, type, date, count }]) => (
          <Row>
            <div>{name}</div>
            <div>{type}</div>
            <div>{date}</div>
            <div>{count}</div>
          </Row>
        )}
      />

      {!!item && (
        <Modal onClose={clearItem}>
          <EditListItem
            title="Edit change bill"
            isNew={!items.has(keyItem)}
            onCancel={clearItem}
            onSave={save}
            onDelete={() => deleteItem()}
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
