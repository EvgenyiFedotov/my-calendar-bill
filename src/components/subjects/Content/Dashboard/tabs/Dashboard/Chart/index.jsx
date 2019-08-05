import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Area, AreaChart } from 'recharts';

import useResize from 'hooks/use-resize';
import { getPlanCount } from 'components/subjects/Content/Dashboard/heplers';
import SelectedDateContext from 'components/subjects/contexts/SelectedDate/context';
import TablesContext from 'components/subjects/contexts/Tables/context';
import { MONTHS_SHORT } from 'helpers/date';

import Styled from './styled';

const Chart = () => {
  const [selectedDate] = React.useContext(SelectedDateContext);
  const {
    maps: {
      changesBill: [changesBill],
      checksBill: [checksBill],
    },
  } = React.useContext(TablesContext);

  const [container, size] = useResize();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const dateTo6Month = new Date(selectedDate);
    dateTo6Month.setDate(15);
    dateTo6Month.setMonth(dateTo6Month.getMonth() + 6);

    if (checksBill && changesBill) {
      const { summByMonth } = getPlanCount({ checksBill, changesBill, date: dateTo6Month });
      const keys = Object.keys(summByMonth).splice(-6);

      setData(
        keys.map(date => ({
          date: `${MONTHS_SHORT[new Date(date).getMonth()]}' ${new Date(date)
            .getFullYear()
            .toString()
            .substr(2, 2)}`,
          plan: summByMonth[date],
        })),
      );
    }
  }, [selectedDate, changesBill, checksBill, setData]);

  return (
    <Styled ref={container}>
      <AreaChart {...size} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis
          dataKey="date"
          tick={{ fill: 'var(--text-color)', fontSize: 'calc(var(--space) * 1.5)' }}
          tickLine={{ stroke: 'var(--text-color)' }}
          axisLine={{ stroke: 'var(--text-color)' }}
        />
        {/* <YAxis
          tick={{ fill: 'var(--text-color)', fontSize: 'calc(var(--space) * 1.5)' }}
          tickLine={{ stroke: 'var(--text-color)' }}
          axisLine={{ stroke: 'var(--text-color)' }}
        /> */}
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--bg-color)',
            borderRadius: 'var(--border-radius)',
          }}
        />
        <Area
          type="monotone"
          dataKey="plan"
          stroke="var(--main-color)"
          activeDot={{ r: 8, stroke: 'var(--bg-color)' }}
          // dot={{ fill: 'var(--bg-color)' }}
          strokeWidth={2}
        />
      </AreaChart>
    </Styled>
  );
};

export default Chart;
