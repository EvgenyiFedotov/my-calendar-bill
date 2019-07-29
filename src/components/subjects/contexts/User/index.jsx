import * as React from 'react';

import Context from './context';

const dataLocalStorage = {
  login: sessionStorage.getItem('LOGIN'),
  hashKey: sessionStorage.getItem('HASHKEY'),
};

const User = ({ children }) => {
  const [data, setData] = React.useState(dataLocalStorage);

  /**
   * Sign in
   * @param {string} loginUser
   * @param {string} hashKey
   */
  const signIn = React.useCallback(
    (login, hashKey) => {
      sessionStorage.setItem('LOGIN', login);
      sessionStorage.setItem('HASHKEY', hashKey);
      setData({ login, hashKey });
    },
    [setData],
  );

  /**
   * Sign out
   */
  const signOut = React.useCallback(() => {
    sessionStorage.removeItem('LOGIN');
    sessionStorage.removeItem('HASHKEY');
    setData({});
  }, [setData]);

  return <Context.Provider value={{ data, signIn, signOut }}>{children}</Context.Provider>;
};

export default User;
