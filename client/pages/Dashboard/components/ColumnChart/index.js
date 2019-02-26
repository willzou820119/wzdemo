import React, { Component } from 'react';
import { Chart, Geom, Tooltip } from 'bizcharts';

export default class ColumnChart extends Component {
  render() {
    const { color, height = 60 } = this.props;
    const data = [
      { month: '1月', sales: 38 },
      { month: '2月', sales: 52 },
      { month: '3月', sales: 61 },
      { month: '4月', sales: 80 },
      { month: '5月', sales: 65 },
      { month: '6月', sales: 60 },
      { month: '7月', sales: 60 },
      { month: '8月', sales: 58 },
      { month: '9月', sales: 48 },
      { month: '10月', sales: 50 },
      { month: '11月', sales: 40 },
      { month: '12月', sales: 40 },
    ];
    const cols = {
      sales: { tickInterval: 20, alias: '转化率' },
    };
    return (
      <Chart height={height} forceFit padding={[2]} data={data} scale={cols}>
        <Geom
          type="area"
          position="month*sales"
          color={color || '#447eff'}
          shape="smooth"
        />
        <Tooltip />
        <Geom
          type="line"
          position="month*sales"
          color={color || '#447eff'}
          size={2}
          shape="smooth"
        />
      </Chart>
    );
  }
}
