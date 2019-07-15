import * as React from 'react';

import ModalWindow from '../../../../../core/ModalWindow';
import EditDialog from '../../../../../core/EditDialog';
import Calendar from '../../../../../core/Calendar';
import InputText from '../../../../../core/styled/InputText';
import AppContext from '../../../../contexts/App/context';
import useField from '../../../../../../hooks/use-field';

const Dialog = () => {
  const { changesBill } = React.useContext(AppContext);
  const [countRef, count] = useField();
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
        <Calendar />
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
