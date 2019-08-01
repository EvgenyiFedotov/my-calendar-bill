import * as React from 'react';

import Context from './context';

const dataLocalStorage = {
  mode: localStorage.getItem('MODE') || 'default',
};

const User = ({ children }) => {
  const [data, setData] = React.useState(dataLocalStorage);

  /**
   * @param {string} mode
   */
  const setMode = React.useCallback(
    mode => {
      localStorage.setItem('MODE', mode);
      setData(prevData => ({ ...prevData, mode }));
    },
    [setData],
  );

  return <Context.Provider value={[data, { setMode }]}>{children}</Context.Provider>;
};

export default User;
