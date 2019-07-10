import * as React from 'react';

import Button from '../styled/Button';
import List from '../List';
import useList from '../../hooks/use-list';
import AppContext from '../contexts/App/context';

import Styled from './styled';
import Toolbar from './styled/Toolbar';
import EditBill from './EditBill';

const ListBills = () => {
  const { bills } = React.useContext(AppContext);
  const { items, createItem, item, editItem, setItems } = bills;

  return (
    <Styled>
      <Toolbar>
        <Button onClick={createItem}>Add bill</Button>
        <Button
          onClick={() => {
            setItems(prevBills => [...prevBills, { name: 'Bill#1' }, { name: 'Bill#2' }]);
          }}
        >
          Add test bills
        </Button>
      </Toolbar>

      <List
        items={items}
        getPropsItem={(item, index) => ({
          onClick: editItem(index),
        })}
        getContentItem={({ name }) => name}
        messageListEmpty="List bills is empty"
      />

      {!!item && <EditBill usedList={bills} />}
    </Styled>
  );
};

export default ListBills;
