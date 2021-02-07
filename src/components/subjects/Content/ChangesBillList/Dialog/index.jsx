import * as React from 'react';

import ModalWindow from 'components/core/ModalWindow';
import EditDialog from 'components/core/EditDialog';
import InputText from 'components/core/styled/InputText';
import useField from 'hooks/use-field';
import useDate from 'hooks/use-date';
import Calendar from 'components/subjects/Content/Calendar';
import useStepperDate from 'hooks/use-stepper-date';

const Dialog = ({ data }) => {
  const [, { getProp, save, clear, remove, isNew }] = data;
  const [titleRef, title] = useField();
  const [countRef, count] = useField();
  const date = React.useMemo(() => new Date(getProp('date') || new Date()), [getProp]);
  const stepperDate = useStepperDate(useDate(date));
  const [selectedDate, setSelectedDate] = React.useState(date);

  const saveItem = React.useCallback(() => {
    const titleValue = title.getValue();
    const countValue = parseInt(count.getValue(), 10);

    if (typeof countValue === 'number' && !isNaN(countValue) && selectedDate) {
      save({
        count: countValue,
        date: new Date(selectedDate).getTime(),
        title: titleValue,
        type: 'repeat',
      });
    }
  }, [save, title, count, selectedDate]);

  return (
    <ModalWindow zIndex={200} onClose={clear}>
      <EditDialog
        title="Change bill"
        isNew={!isNew()}
        onCancel={clear}
        onSave={saveItem}
        onDelete={remove}
      >
        <InputText ref={titleRef} placeholder="Title" defaultValue={getProp('title') || ''} />

        <Calendar
          stepperDate={stepperDate}
          selectedDate={selectedDate}
          onClickDate={setSelectedDate}
        />

        <InputText
          ref={countRef}
          placeholder="Count"
          type="number"
          defaultValue={getProp('count')}
        />
      </EditDialog>
    </ModalWindow>
  );
};

export default Dialog;
