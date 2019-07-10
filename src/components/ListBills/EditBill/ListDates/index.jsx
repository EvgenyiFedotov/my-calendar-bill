import * as React from 'react';

import List from '../../../List';
import Button from '../../../styled/Button';
import Modal from '../../../Modal';
import EditListItem from '../../../EditListItem';
import Calendar from '../../../Calendar';
import InputText from '../../../styled/InputText';
import { isEqualMonth } from '../../../../helpers/date';

/**
 * Component `ListDates`
 * @param {Object} usedList
 * @param {string} [title='Add']
 */
const ListDates = ({
  usedList: { items, createItem, clearItem, item, saveItem, editItem, deleteItem },
  title = 'Add',
}) => {
  const countRef = React.useRef();
  const [selectedDate, setSelectedDate] = React.useState();
  const clickDay = React.useCallback(
    ({ dateWeek, date }) => isEqualMonth(dateWeek, date) && setSelectedDate(dateWeek.getDate()),
    [setSelectedDate],
  );
  const save = React.useCallback(() => {
    const count = countRef.current.value;
    if (count && selectedDate)
      saveItem({
        date: selectedDate,
        count,
      });

    setSelectedDate(undefined);
    countRef.current.value = '';
  }, [countRef, selectedDate, setSelectedDate]);

  React.useEffect(() => {
    if (item) {
      const { date, count } = item;
      setSelectedDate(date);
      countRef.current.value = count;
    }
  }, [item, setSelectedDate, countRef]);

  return (
    <>
      <Button onClick={createItem} style={{ textAlign: 'left' }}>
        {title}
      </Button>

      <List
        {...{ items }}
        getPropsItem={(item, index) => ({
          justifyContent: 'space-between',
          onClick: editItem(index),
        })}
        getContentItem={({ count, date }) => (
          <>
            <div>{date}</div>
            <div>{count}</div>
          </>
        )}
        messageListEmpty=""
      />

      {!!item && (
        <Modal onClose={clearItem}>
          <EditListItem
            title="Add date"
            isNew={!Object.keys(item).length}
            onCancel={clearItem}
            onSave={save}
            onDelete={deleteItem}
          >
            <Calendar
              showSixthWeek={false}
              date={new Date('2019-07-01')}
              getDayProps={({ dateWeek, date }) => ({
                holiday: false,
                selected: selectedDate
                  ? dateWeek.getDate() === selectedDate && isEqualMonth(dateWeek, date)
                  : false,
                onClick: clickDay,
              })}
              getDayContent={({ dateWeek, date }) =>
                isEqualMonth(dateWeek, date) ? dateWeek.getDate() : ''
              }
            />
            <InputText type="number" placeholder="Count" ref={countRef} />
          </EditListItem>
        </Modal>
      )}
    </>
  );
};

export default ListDates;
