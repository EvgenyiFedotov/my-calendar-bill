import * as React from 'react';

import Context from './context';

const KEY_SS = 'USER';

const userFromSS = JSON.parse(sessionStorage.getItem(KEY_SS)) || {};

const User = ({ children }) => {
  const [data, setData] = React.useState(userFromSS);

  /**
   * Set value in session storage
   */
  const dispatch = React.useCallback(
    (key, value) =>
      setData(prevData => {
        const nextData = { ...prevData, [key]: value };
        sessionStorage.setItem(KEY_SS, JSON.stringify(nextData));
        return nextData;
      }),
    [setData],
  );

  /**
   * Logout
   */
  const logout = React.useCallback(() => {
    sessionStorage.removeItem(KEY_SS);
    setData({});
  }, [setData]);

  return <Context.Provider value={{ data, dispatch, logout }}>{children}</Context.Provider>;
};

export default User;
