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
  const [currPoint, setCurrentPoint] = React.useState({ summ: 0, date: new Date('2019-07-01') });

  return <Context.Provider value={{ changesBill, currPoint }}>{children}</Context.Provider>;
};

export default App;
