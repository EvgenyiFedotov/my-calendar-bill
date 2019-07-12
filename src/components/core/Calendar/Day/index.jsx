import * as React from 'react';

import { isEqualMonth, isHoliday } from '../../../../helpers/date';

import Styled from './styled';

/**
 * Component `Day`
 * @param {Object} defaultDayProps
 * @param {number} defaultDayProps.indexWeek
 * @param {number} defaultDayProps.indexDateWeek
 * @param {Date} defaultDayProps.dateWeek
 * @param {Date} defaultDayProps.date
 * @param {() => Object} [getDayProps]
 * @param {() => React.Element} [getDayContent]
 */
const Day = ({
  defaultDayProps,
  getDayProps = () => ({}),
  getDayContent = ({ dateWeek }) => dateWeek.getDate(),
}) => {
  const { dateWeek, date } = defaultDayProps;
  const { onClick = () => {}, ...otherDayProps } = getDayProps(defaultDayProps);
  const onClickWrapper = React.useCallback(defaultDayProps => () => onClick(defaultDayProps), [
    onClick,
  ]);

  return (
    <Styled
      otherMonth={!isEqualMonth(dateWeek, date)}
      holiday={isHoliday(dateWeek)}
      {...otherDayProps}
      onClick={onClickWrapper(defaultDayProps)}
    >
      {getDayContent(defaultDayProps)}
    </Styled>
  );
};

export default Day;
