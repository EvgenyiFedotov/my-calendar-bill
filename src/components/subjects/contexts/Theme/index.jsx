import * as React from 'react';

import Context from './context';

const User = ({ children }) => {
  const [theme, setTheme] = React.useState('white');
  const toggleTheme = React.useCallback(
    () => setTheme(prevTheme => (prevTheme === 'white' ? 'black' : 'white')),
    [setTheme],
  );

  return <Context.Provider value={{ theme, setTheme, toggleTheme }}>{children}</Context.Provider>;
};

export default User;
