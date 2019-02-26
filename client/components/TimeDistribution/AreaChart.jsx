import React from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

export default class AreaChart extends React.Component {
  render() {
    const data = [
      {
        month: '2018-12-01',
        value: 259,
      },
      {
        month: '2018-12-02',
        value: 274,
      },
      {
        month: '2018-12-03',
        value: 270,
      },
      {
        month: '2018-12-04',
        value: 310,
      },
      {
        month: '2018-12-05',
        value: 319,
      },
      {
        month: '2018-12-06',
        value: 320,
      },
      {
        month: '2018-12-07',
        value: 332,
      },
    ];
    const cols = {
      value: {
        min: 100,
      },
      month: {
        range: [0, 1],
      },
    };
    return (
      <div>
        <Chart height={500} data={data} scale={cols} forceFit padding={[40]}>
          <Axis name="month" label={{
              textStyle:{fill:'#fff'}
            }}/>
          <Axis name="value" label={{
              textStyle:{fill:'#fff'}
            }}/>
          <Tooltip
            crosshairs={{
              type: 'line',
            }}
          />
          <Geom type="area" position="month*value" shape="smooth" />
          <Geom type="line" position="month*value" shape="smooth" size={2} />
        </Chart>
      </div>
    );
  }
}
