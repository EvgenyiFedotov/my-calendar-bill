import * as React from 'react';

import Context from './context';

const App = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default App;
