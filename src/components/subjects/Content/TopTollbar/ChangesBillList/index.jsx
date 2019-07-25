import * as React from 'react';

import Row from 'components/core/styled/Row';
import Button from 'components/core/styled/Button';
import AppContext from 'components/subjects/contexts/App/context';
import List from 'components/core/List';
import LabelText from 'components/core/LabelText';
import Branch from 'components/core/Branch';
import ModalWindow from 'components/core/ModalWindow';
import useMapItem from 'hooks/use-map-item';

import Styled from './styled';
import Dialog from './Dialog';

/**
 * Component `ChangesBilList`
 * @param {() => void} [onClose]
 */
const ChangesBillList = ({ onClose }) => {
  const {
    changesBill: [changesBill, setChangesBill],
    db,
  } = React.useContext(AppContext);
  const changesBillItem = useMapItem([changesBill, setChangesBill], db.tables.changesBill);
  const { data, create, edit } = changesBillItem;

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
            <Button onClick={create()}>Add</Button>
            <Button onClick={onClose}>Close</Button>
          </Row>
        </Row>

        <List
          items={changesBill}
          style={{ flex: 1 }}
          getItemProps={item => ({
            children: renderItemChangesBill(item),
            onClick: edit(item[0]),
            justifyContent: 'space-between',
          })}
        />

        <Branch value={data[0]}>
          <Dialog data={changesBillItem} />
        </Branch>
      </Styled>
    </ModalWindow>
  );
};

export default ChangesBillList;
