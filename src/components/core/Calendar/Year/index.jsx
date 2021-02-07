import * as React from 'react';

import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';

import Month from './Month';

/**
 * Component `Year`
 * @param {Date} [date = new Date()]
 * @param {React.Component} [ComponentMonth = Month]
 * @param {(date: Date) => Object} [getMonthProps = () => {}]
 */
const Year = ({ date = new Date(), ComponentMonth = Month, getMonthProps = () => {} }) => {
  const dates = React.useMemo(() => {
    const currDate = new Date(date);
    currDate.setMonth(0);
    currDate.setDate(1);
    const result = [];

    for (let index = 0; index < 12; index += 1) {
      if (!result[result.length - 1] || result[result.length - 1].length % 4 === 0) result.push([]);

      result[result.length - 1].push(new Date(currDate));
      currDate.setMonth(index + 1);
    }

    return result;
  }, [date]);

  return (
    <Column>
      {dates.map((period, indexPeriod) => (
        <Row key={indexPeriod}>
          {period.map((dateMonth, indexDate) => (
            <ComponentMonth
              key={indexDate}
              width={7 / 4}
              height={2}
              date={dateMonth}
              {...getMonthProps(dateMonth)}
            />
          ))}
        </Row>
      ))}
    </Column>
  );
};

export default Year;
