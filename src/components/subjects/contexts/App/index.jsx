import * as React from 'react';

import Context from './context';
import useChangesBill from './use-changes-bill';
import useCheckList from './use-check-list';

const App = ({ children }) => {
  const date = React.useState(new Date());
  const changesBill = useChangesBill();
  const checkList = useCheckList();

  return <Context.Provider value={{ date, changesBill, checkList }}>{children}</Context.Provider>;
};

export default App;
