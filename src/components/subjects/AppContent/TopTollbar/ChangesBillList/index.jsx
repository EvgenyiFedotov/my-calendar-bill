import * as React from 'react';

import Row from '../../../../core/styled/Row';
import Button from '../../../../core/styled/Button';
import AppContext from '../../../contexts/App/context';
import List from '../../../../core/List';
import LabelText from '../../../../core/LabelText';
import Branch from '../../../../core/Branch';
import ModalWindow from '../../../../core/ModalWindow';

import Styled from './styled';
import Dialog from './Dialog';

/**
 * Component `ChangesBilList`
 * @param {() => void} [onClose]
 */
const ChangesBillList = ({ onClose }) => {
  const { changesBill } = React.useContext(AppContext);

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

  return (
    <ModalWindow onClose={onClose}>
      <Styled>
        <Row justifyContent="space-between" alignItems="center">
          <b>Changes bill</b>
          <Row justifyContent="flex-end" alignItems="center">
            <Button onClick={changesBill.createItem()}>Add</Button>
            <Button onClick={onClose}>Close</Button>
          </Row>
        </Row>

        <List
          items={changesBill.items}
          style={{ flex: 1 }}
          getItemProps={item => ({
            children: renderItemChangesBill(item),
            onClick: changesBill.editItem(item[0]),
            justifyContent: 'space-between',
          })}
        />

        <Branch value={changesBill.item[0]}>
          <Dialog />
        </Branch>
      </Styled>
    </ModalWindow>
  );
};

export default ChangesBillList;
