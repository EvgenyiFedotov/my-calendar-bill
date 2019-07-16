import * as React from 'react';

import ModalWindow from 'components/core/ModalWindow';
import EditDialog from 'components/core/EditDialog';
import InputText from 'components/core/styled/InputText';
import AppContext from 'components/subjects/contexts/App/context';
import useField from 'hooks/use-field';
import useDate from 'hooks/use-date';
import Calendar from 'components/subjects/AppContent/Calendar';
import useStepperDate from 'hooks/use-stepper-date';
import useSelectedDate from 'hooks/use-selected-date';

const Dialog = () => {
  const { changesBill } = React.useContext(AppContext);
  const [countRef, count] = useField();
  const stepperDate = useStepperDate(useDate());
  const selectedDate = useSelectedDate(new Date(changesBill.getItemProp('date') || new Date()));
  const save = React.useCallback(() => {
    const countValue = parseInt(count.getValue(), 10);
    const selectedDateValue = selectedDate[0];

    if (typeof countValue === 'number' && !isNaN(countValue) && selectedDateValue) {
      changesBill.saveItem({
        count: countValue,
        date: new Date(selectedDateValue).getTime(),
      });
    }
  }, [changesBill, count, selectedDate]);

  return (
    <ModalWindow zIndex={200} onClose={changesBill.clearItem}>
      <EditDialog
        title="Change bill"
        isNew={!changesBill.items.has(changesBill.item[0])}
        onCancel={changesBill.clearItem}
        onSave={save}
      >
        <Calendar stepperDate={stepperDate} selectedDate={selectedDate} />

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
