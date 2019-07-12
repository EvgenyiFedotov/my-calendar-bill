import * as React from 'react';

import Context from './context';
import useChangesBill from './use-changes-bill';

const App = ({ children }) => {
  const date = React.useState(new Date());
  const changesBill = useChangesBill();

  return <Context.Provider value={{ date, changesBill }}>{children}</Context.Provider>;
};

export default App;
