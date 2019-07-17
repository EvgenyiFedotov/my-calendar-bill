import * as React from 'react';

import Context from './context';

const user = JSON.parse(sessionStorage.getItem('USER')) || {};

const User = ({ children }) => {
  const [key, setKey] = React.useState(user.key);
  const setKeySS = React.useCallback(
    key => {
      user.key = key;
      sessionStorage.setItem('USER', JSON.stringify(user));
      setKey(key);
    },
    [setKey],
  );

  return <Context.Provider value={{ key: [key, setKeySS] }}>{children}</Context.Provider>;
};

export default User;
