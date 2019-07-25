import * as React from 'react';

import ModalWindow from 'components/core/ModalWindow';
import EditDialog from 'components/core/EditDialog';
import InputText from 'components/core/styled/InputText';
import useField from 'hooks/use-field';
import useDate from 'hooks/use-date';
import Calendar from 'components/subjects/Content/Calendar';
import useStepperDate from 'hooks/use-stepper-date';
// import { changesBillTable } from 'components/subjects/contexts/App/index-db';
import UserContext from 'components/subjects/contexts/User/context';

const Dialog = ({ data }) => {
  const user = React.useContext(UserContext);
  const { getItemProp, saveItem, clearItem, deleteItem, isNew } = data;
  const [titleRef, title] = useField();
  const [countRef, count] = useField();
  const date = React.useMemo(() => new Date(getItemProp('date') || new Date()), [getItemProp]);
  const stepperDate = useStepperDate(useDate(date));
  const [selectedDate, setSelectedDate] = React.useState(date);
  const save = React.useCallback(() => {
    const titleValue = title.getValue();
    const countValue = parseInt(count.getValue(), 10);

    if (typeof countValue === 'number' && !isNaN(countValue) && selectedDate) {
      const [keyItem, item] = saveItem({
        count: countValue,
        date: new Date(selectedDate).getTime(),
        title: titleValue,
        type: 'repeat',
      });
      // changesBillTable.setCrypto(keyItem, JSON.stringify(item), user.data.key);
    }
  }, [saveItem, title, count, selectedDate, user.data]);

  return (
    <ModalWindow zIndex={200} onClose={clearItem}>
      <EditDialog
        title="Change bill"
        isNew={!isNew()}
        onCancel={clearItem}
        onSave={save}
        onDelete={deleteItem}
      >
        <InputText ref={titleRef} placeholder="Title" defaultValue={getItemProp('title') || ''} />

        <Calendar
          stepperDate={stepperDate}
          selectedDate={selectedDate}
          onClickDate={setSelectedDate}
        />

        <InputText
          ref={countRef}
          placeholder="Count"
          type="number"
          defaultValue={getItemProp('count')}
        />
      </EditDialog>
    </ModalWindow>
  );
};

export default Dialog;
