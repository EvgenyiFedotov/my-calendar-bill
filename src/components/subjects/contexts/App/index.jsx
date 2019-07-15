import * as React from 'react';

import AppGlobalStyled from 'components/core/styled/AppGlobal';

import Context from './context';
import useChangesBill from './use-changes-bill';
import useCheckList from './use-check-list';
import useTheme from './use-theme';

const App = ({ children }) => {
  const date = React.useState(new Date());
  const changesBill = useChangesBill();
  const checkList = useCheckList(changesBill);
  const theme = useTheme();

  return (
    <Context.Provider value={{ date, changesBill, checkList, theme }}>
      <AppGlobalStyled theme={theme[0]} />
      {children}
    </Context.Provider>
  );
};

export default App;
