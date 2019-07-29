import * as React from 'react';
import { LineChart, Line, Bar, Cell, Tooltip, XAxis } from 'recharts';

import AppContext from 'components/subjects/contexts/App/context';
import {
  getChangesBillMonth,
  summChangesBill,
  getPlanCount,
} from 'components/subjects/contexts/App/helpers-v2';

const Chart = () => {
  const {
    date: [date],
    changesBill: [changesBill],
    checkList: [checkList],
  } = React.useContext(AppContext);
  const data = React.useMemo(() => {
    const cbm = getChangesBillMonth(changesBill, date);
    return Array.from(cbm).reduce(
      (memo, [dateSQL, changesBillDate]) => [
        ...memo,
        {
          countDirection: summChangesBill(changesBillDate),
          countPlan: getPlanCount({ checkList, changesBill, date }),
          dateSQL,
        },
      ],
      [],
    );
  }, [changesBill, checkList, date]);

  console.log(data);

  return (
    <div>
      <LineChart width={336} height={423} data={data}>
        <Tooltip cursor={false} />
        <Line type="monotone" dataKey="countDirection" stroke="var(--main-color)" strokeWidth={2}>
          {data.map((entry, index) => (
            <Cell cursor="pointer" key={`cell-${index}`} />
          ))}
        </Line>
        <XAxis
          dataKey="dateSQL"
          axisLine={false}
          tick={{ fontSize: 'var(--space)' }}
          interval={0}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
