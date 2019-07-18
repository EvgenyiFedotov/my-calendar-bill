import * as React from 'react';

import ModalWindow from 'components/core/ModalWindow';
import EditDialog from 'components/core/EditDialog';
import InputText from 'components/core/styled/InputText';
import AppContext from 'components/subjects/contexts/App/context';
import useField from 'hooks/use-field';
import useDate from 'hooks/use-date';
import Calendar from 'components/subjects/AppContent/Calendar';
import useStepperDate from 'hooks/use-stepper-date';

const Dialog = () => {
  const { changesBill } = React.useContext(AppContext);
  const [titleRef, title] = useField();
  const [countRef, count] = useField();
  const date = React.useMemo(() => new Date(changesBill.getItemProp('date') || new Date()), [
    changesBill,
  ]);
  const stepperDate = useStepperDate(useDate(date));
  const [selectedDate, setSelectedDate] = React.useState(date);
  const save = React.useCallback(() => {
    const titleValue = title.getValue();
    const countValue = parseInt(count.getValue(), 10);

    if (typeof countValue === 'number' && !isNaN(countValue) && selectedDate) {
      changesBill.saveItem({
        count: countValue,
        date: new Date(selectedDate).getTime(),
        title: titleValue,
        type: 'repeat',
      });
    }
  }, [changesBill, title, count, selectedDate]);

  return (
    <ModalWindow zIndex={200} onClose={changesBill.clearItem}>
      <EditDialog
        title="Change bill"
        isNew={!changesBill.items.has(changesBill.item[0])}
        onCancel={changesBill.clearItem}
        onSave={save}
        onDelete={() => changesBill.deleteItem()}
      >
        <InputText
          ref={titleRef}
          placeholder="Title"
          defaultValue={changesBill.getItemProp('title') || ''}
        />

        <Calendar
          stepperDate={stepperDate}
          selectedDate={selectedDate}
          onClickDate={setSelectedDate}
        />

        <InputText
          ref={countRef}
          placeholder="Count"
          type="number"
          defaultValue={changesBill.getItemProp('count')}
        />
      </EditDialog>
    </ModalWindow>
  );
};

export default Dialog;
