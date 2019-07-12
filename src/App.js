import React from 'react';

import AppContext from './components/subjects/contexts/App';
import AppGlobalStyled from './components/core/styled/AppGlobal';
import AppStyled from './components/core/styled/App';

import Calendar from './components/core/Calendar';
import TriggerMonth from './components/core/Calendar/TriggerMonth';
import EditDialog from './components/core/EditDialog';
import ModalWindow from './components/core/ModalWindow';
import List from './components/core/List';
import LabelText from './components/core/LabelText';

function App() {
  const [date, setDate] = React.useState(new Date());

  return (
    <AppContext>
      <AppGlobalStyled theme="white" />
      <AppStyled>
        <TriggerMonth date={date} onChangeDate={setDate} />
        <Calendar date={date} />
        <ModalWindow>
          <EditDialog>
            <List
              items={new Map([[1, 1], [2, 2], [3, 3]])}
              getItemProps={([, value]) => ({
                children: <LabelText>{value}</LabelText>,
                justifyContent: 'flex-end',
              })}
            />
          </EditDialog>
        </ModalWindow>
      </AppStyled>
    </AppContext>
  );
}

export default App;
