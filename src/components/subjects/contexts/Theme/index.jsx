import * as React from 'react';

import Context from './context';
import Styled from './styled';
import StyledGlobal from './styled/Global';

const User = ({ children }) => {
  const [theme, setTheme] = React.useState('white');
  const toggleTheme = React.useCallback(
    () => setTheme(prevTheme => (prevTheme === 'white' ? 'black' : 'white')),
    [setTheme],
  );

  return (
    <Context.Provider value={{ theme, setTheme, toggleTheme }}>
      <StyledGlobal theme={theme} />
      <Styled>{children}</Styled>
    </Context.Provider>
  );
};

export default User;
