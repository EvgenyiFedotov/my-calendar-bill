import * as React from 'react';

import useDate from 'hooks/use-date';

import Context from './context';

const SelectedDate = ({ children }) => {
  const date = useDate();
  return <Context.Provider value={date}>{children}</Context.Provider>;
};

export default SelectedDate;
