import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import useResize from 'hooks/use-resize';

import Styled from './styled';

const data = [
  { name: 'Page A', uv: 4000, pv: null, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: null, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: null, amt: 2290 },
  { name: 'Page D', uv: 3908, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: null, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: null, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: null, pv: 4300, amt: 2100 },
];

const Chart = () => {
  const [container, size] = useResize();

  return (
    <Styled ref={container}>
      <LineChart {...size} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis
          dataKey="name"
          tick={{ fill: 'var(--text-color)' }}
          tickLine={{ stroke: 'var(--text-color)' }}
          axisLine={{ stroke: 'var(--text-color)' }}
        />
        <YAxis
          tick={{ fill: 'var(--text-color)' }}
          tickLine={{ stroke: 'var(--text-color)' }}
          axisLine={{ stroke: 'var(--text-color)' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--bg-color)',
            borderRadius: 'var(--border-radius)',
          }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="var(--main-color)"
          activeDot={{ r: 8, stroke: 'var(--bg-color)' }}
          dot={{ fill: 'var(--bg-color)' }}
        />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="var(--main-color)"
          activeDot={{ r: 8, stroke: 'var(--bg-color)' }}
          dot={{ fill: 'var(--bg-color)' }}
          strokeDasharray="5 5"
        />
      </LineChart>
    </Styled>
  );
};

export default Chart;
