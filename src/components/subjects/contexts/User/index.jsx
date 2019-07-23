import * as React from 'react';

import Context from './context';

const KEY_SS = 'USER';

const user = JSON.parse(sessionStorage.getItem(KEY_SS)) || {};

const User = ({ children }) => {
  const [key, setKey] = React.useState(user.key);

  /**
   * Set key in session storage
   * @param {string} key
   */
  const setKeySS = React.useCallback(
    key => {
      user.key = key;
      sessionStorage.setItem(KEY_SS, JSON.stringify(user));
      setKey(key);
    },
    [setKey],
  );

  /**
   * Logout
   */
  const logout = React.useCallback(() => {
    sessionStorage.removeItem(KEY_SS);
    setKey(null);
  }, []);

  return <Context.Provider value={{ key: [key, setKeySS], logout }}>{children}</Context.Provider>;
};

export default User;
