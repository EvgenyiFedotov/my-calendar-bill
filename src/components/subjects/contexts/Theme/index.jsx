import * as React from 'react';

import Context from './context';

const themeLocalStorage = localStorage.getItem('THEME') || 'white';

const Theme = ({ children }) => {
  const [data, setData] = React.useState(themeLocalStorage);
  const toggleTheme = React.useCallback(
    value =>
      setData(prevData => {
        let nextData = value;

        if (nextData === undefined) {
          nextData = prevData === 'white' ? 'dark' : 'white';
        } else {
          nextData = nextData || 'white';
        }

        localStorage.setItem('THEME', nextData);

        return nextData;
      }),
    [setData],
  );

  return <Context.Provider value={{ data, toggleTheme }}>{children}</Context.Provider>;
};

export default Theme;
