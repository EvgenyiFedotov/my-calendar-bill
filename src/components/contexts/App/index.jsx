import * as React from 'react';

import useList from '../../../hooks/use-list';

import Context from './context';

const App = ({ children }) => {
  const changesBill = useList([
    { name: '#1', date: 9, type: 'out', count: 1000 },
    { name: '#2', date: 10, type: 'in', count: 2500 },
    { name: '#3', date: 19, type: 'out', count: 500 },
    { name: '#4', date: 25, type: 'in', count: 2500 },
  ]);
  const lastCheckedCount = React.useState(1000);
  const lastCheckedDate = React.useState(new Date());

  return (
    <Context.Provider value={{ changesBill, lastCheckedCount, lastCheckedDate }}>
      {children}
    </Context.Provider>
  );
};

export default App;
