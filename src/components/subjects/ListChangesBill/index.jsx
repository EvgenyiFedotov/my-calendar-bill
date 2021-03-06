import * as React from 'react';

import List from '../../List';
import AppContext from '../../contexts/App/context';
import Column from '../../styled/Column';
import Button from '../../styled/Button';
import Modal from '../../Modal';
import EditListItem from '../../EditListItem';
import InputText from '../../styled/InputText';
import LabelText from '../../core/LabelText';
import Calendar from '../../Calendar';
import CalendarTrigger from '../../CalendarTrigger';
import { side } from '../../styled/Box';
import useSelectedDate from '../../../hooks/use-selected-date';

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
  const typeRef = React.useRef();
  const countRef = React.useRef();
  const [selectedDate, { isSelectedDate, clickDate, setSelectedDate }] = useSelectedDate();
  const save = React.useCallback(() => {
    const type = typeRef.current.value.trim();
    const count = parseInt(countRef.current.value, 10);

    if (type && count && selectedDate) {
      saveItem({ type, count, date: new Date(selectedDate) });
      setSelectedDate(undefined);
    }
  }, [saveItem, selectedDate]);
  const [date, setDate] = React.useState(new Date());

  return (
    <Column>
      <Button onClick={createItem({ name: `Change_bill #${items.size}` })}>Add</Button>

      <List
        items={items}
        style={{
          width: side(8),
        }}
        getPropsItem={([key]) => ({
          onClick: editItem(key),
          justifyContent: 'space-between',
        })}
        getContentItem={([, { type, date, count }]) => (
          <>
            <div>{date.getDate()}th</div>
            <LabelText color={type === 'in' ? 'green' : 'red'}>{count}</LabelText>
          </>
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
            <CalendarTrigger {...{ date, setDate }} />
            <Calendar
              {...{ date, setDate }}
              getDayProps={({ dateWeek }) => ({
                selected: isSelectedDate(dateWeek),
                onClick: clickDate,
              })}
            />
            <InputText defaultValue={item.type || 'in'} placeholder="Type" ref={typeRef} />
            <InputText defaultValue={item.count} placeholder="Count" type="number" ref={countRef} />
          </EditListItem>
        </Modal>
      )}
    </Column>
  );
};

export default ListChangesBill;
