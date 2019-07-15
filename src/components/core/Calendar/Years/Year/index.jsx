import * as React from 'react';

import Branch from 'components/core/Branch';

import Styled from './styled';

/**
 * Component `Year`
 * @param {Date} date
 * @param {(date: Date) => {}} [onClick = () => {}]
 */
const Year = ({ date, onClick = () => {}, ...props }) => {
  const onClickYear = React.useCallback(() => onClick(date), [date, onClick]);
  const isEquealYear = React.useMemo(() => date.getFullYear() === new Date().getFullYear(), [date]);

  return (
    <Styled {...props} onClick={onClickYear}>
      <Branch value={isEquealYear}>
        <b>{date.getFullYear()}</b>
      </Branch>

      <Branch value={!isEquealYear}>{date.getFullYear()}</Branch>
    </Styled>
  );
};

export default Year;
