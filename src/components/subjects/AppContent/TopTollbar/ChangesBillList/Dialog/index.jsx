import * as React from 'react';

import ModalWindow from 'components/core/ModalWindow';
import EditDialog from 'components/core/EditDialog';
import InputText from 'components/core/styled/InputText';
import AppContext from 'components/subjects/contexts/App/context';
import useField from 'hooks/use-field';
import useDate from 'hooks/use-date';
import Calendar from 'components/subjects/AppContent/Calendar';

const Dialog = () => {
  const { changesBill } = React.useContext(AppContext);
  const [countRef, count] = useField();
  const date = useDate();
  const save = React.useCallback(() => {
    const countValue = parseInt(count.getValue(), 10);

    if (typeof countValue === 'number' && !isNaN(countValue)) {
      changesBill.saveItem({
        count: countValue,
      });
    }
  }, [changesBill, count]);

  return (
    <ModalWindow zIndex={200} onClose={changesBill.clearItem}>
      <EditDialog
        title="Change bill"
        isNew={!changesBill.items.has(changesBill.item[0])}
        onCancel={changesBill.clearItem}
        onSave={save}
      >
        <Calendar date={date} onSelectedDate={dd => console.log('@', dd)} />
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
