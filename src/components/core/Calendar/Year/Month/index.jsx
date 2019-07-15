import * as React from 'react';

import { dateToShortMonth } from 'helpers/date';

import Styled from './styled';

/**
 * Component `Month`
 * @param {Date} date
 * @param {(date: Date) => {}} [onClick = () => {}]
 */
const Month = ({ date, onClick = () => {}, ...props }) => {
  const onClickMonth = React.useCallback(() => onClick(date), [date, onClick]);

  return (
    <Styled {...props} onClick={onClickMonth}>
      {dateToShortMonth(date)}
    </Styled>
  );
};

export default Month;
