import * as React from 'react';

import Row from '../../../../core/styled/Row';
import Button from '../../../../core/styled/Button';
import AppContext from '../../../contexts/App/context';
import List from '../../../../core/List';
import LabelText from '../../../../core/LabelText';
import Branch from '../../../../core/Branch';
import ModalWindow from '../../../../core/ModalWindow';
import EditDialog from '../../../../core/EditDialog';

import Styled from './styled';

/**
 * Component `ChangesBilList`
 * @param {() => void} [onClose]
 */
const ChangesBillList = ({ onClose }) => {
  const { changesBill } = React.useContext(AppContext);
  const [showEditDialog, setShowEditDialog] = React.useState(false);

  // Render item changes bill
  const renderItemChangesBill = React.useCallback(
    ([key, { count }]) => (
      <>
        <div>{key}</div>
        <LabelText color={count < 0 ? 'red' : count > 0 ? 'green' : undefined}>{count}</LabelText>
      </>
    ),
    [],
  );

  const hideDialog = React.useCallback(() => setShowEditDialog(false), [setShowEditDialog]);

  return (
    <ModalWindow onClose={onClose}>
      <Styled>
        <Row justifyContent="space-between" alignItems="center">
          <b>Changes bill</b>
          <Row justifyContent="flex-end" alignItems="center">
            <Button onClick={() => setShowEditDialog(true)}>Add</Button>
            <Button onClick={onClose}>Close</Button>
          </Row>
        </Row>

        <List
          items={changesBill.items}
          style={{ flex: 1 }}
          getItemProps={item => ({
            children: renderItemChangesBill(item),
            justifyContent: 'space-between',
          })}
        />

        <Branch value={showEditDialog}>
          <ModalWindow zIndex={200} onClose={hideDialog}>
            <EditDialog onCancel={hideDialog} />
          </ModalWindow>
        </Branch>
      </Styled>
    </ModalWindow>
  );
};

export default ChangesBillList;
