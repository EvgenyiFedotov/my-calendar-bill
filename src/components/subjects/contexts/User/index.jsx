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
    addData =>
      setData(prevData => {
        const nextData = { ...prevData, ...addData };
        sessionStorage.setItem(KEY_SS, JSON.stringify(nextData));
        return nextData;
      }),
    [setData],
  );

  /**
   * Sign in
   * @param {string} loginUser
   * @param {string} hashKey
   */
  const signIn = React.useCallback((login, hashKey) => dispatch({ login, hashKey }), [dispatch]);

  /**
   * Sign out
   */
  const signOut = React.useCallback(() => {
    sessionStorage.removeItem(KEY_SS);
    setData({});
  }, [setData]);

  return <Context.Provider value={{ data, signIn, signOut }}>{children}</Context.Provider>;
};

export default User;
