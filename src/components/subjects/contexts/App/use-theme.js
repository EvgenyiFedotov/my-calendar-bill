import * as React from 'react';

export default () => {
  const [theme, setTheme] = React.useState('white');
  const toggleTheme = React.useCallback(
    () => setTheme(prevTheme => (prevTheme === 'white' ? 'black' : 'white')),
    [setTheme],
  );

  return [theme, { setTheme, toggleTheme }];
};
