import * as React from 'react';

import { dateToMonth } from 'helpers/date';
import Row from 'components/core/styled/Row';
import Box from 'components/core/styled/Box';
import Column from 'components/core/styled/Column';

/**
 * Component `CalendarTrigger`
 * @param {Date} [date = new Date()]
 * @param {() => void} [onClickMonth = () => {}]
 * @param {() => void} [onClickYear = () => {}]
 * @param {() => void} [onClickPrev = () => {}]
 * @param {() => void} [onClickToday = () => {}]
 * @param {() => void} [onClickNext = () => {}]
 */
const CalendarTrigger = ({
  date = new Date(),
  onClickMonth = () => {},
  onClickYear = () => {},
  onClickPrev = () => {},
  onClickToday = () => {},
  onClickNext = () => {},
}) => (
  <Column>
    <Row>
      <Box width={3.5} onClick={onClickMonth}>
        {dateToMonth(date)}
      </Box>
      <Box width={3.5} onClick={onClickYear}>
        {date.getFullYear()}
      </Box>
    </Row>

    <Row>
      <Box width={2} onClick={onClickPrev} disabled={true}>
        Prev
      </Box>
      <Box width={3} onClick={onClickToday}>
        Today
      </Box>
      <Box width={2} onClick={onClickNext} disabled={true}>
        Next
      </Box>
    </Row>
  </Column>
);

export default CalendarTrigger;
