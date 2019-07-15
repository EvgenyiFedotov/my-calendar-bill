import * as React from 'react';

import { dateToShortMonth, isEqualMonth } from 'helpers/date';
import Branch from 'components/core/Branch';

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
      <Branch value={isEqualMonth(date, new Date())}>
        <b>{dateToShortMonth(date)}</b>
      </Branch>

      <Branch value={!isEqualMonth(date, new Date())}>{dateToShortMonth(date)}</Branch>
    </Styled>
  );
};

export default Month;
