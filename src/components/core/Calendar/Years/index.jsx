import * as React from 'react';

import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';

import Year from './Year';

/**
 * Component `Year`
 * @param {Date} [date = new Date()]
 * @param {React.Component} [ComponentYear = Year]
 * @param {(date: Date) => Object} [getYearProps = () => {}]
 */
const Years = ({ date, ComponentYear = Year, getYearProps = () => {} }) => {
  const dates = React.useMemo(() => {
    const currDate = new Date(date);
    currDate.setMonth(0);
    currDate.setDate(1);
    const result = [];

    for (let index = 0; index < 4; index += 1) {
      if (!result[result.length - 1] || result[result.length - 1].length % 2 === 0) result.push([]);

      result[result.length - 1].push(new Date(currDate));
      currDate.setFullYear(currDate.getFullYear() + 1);
    }

    return result;
  }, [date]);

  return (
    <Column>
      {dates.map((period, indexPeriod) => (
        <Row key={indexPeriod}>
          {period.map((dateYear, indexDate) => (
            <ComponentYear
              key={indexDate}
              width={7 / 2}
              height={3}
              date={dateYear}
              {...getYearProps(dateYear)}
            />
          ))}
        </Row>
      ))}
    </Column>
  );
};

export default Years;
