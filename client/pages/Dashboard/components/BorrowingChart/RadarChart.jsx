import React from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

class Basic extends React.Component {
  render() {
    const { DataView } = DataSet;
    const data = [
      {
        item: '资金周转',
        中型: 70,
        小微: 30,
      },
      {
        item: '生产经营',
        中型: 60,
        小微: 70,
      },
      {
        item: '固定资产',
        中型: 50,
        小微: 60,
      },
      {
        item: '资产并购',
        中型: 40,
        小微: 50,
      },
      {
        item: '投资',
        中型: 60,
        小微: 70,
      },
      {
        item: '金融理财',
        中型: 70,
        小微: 50,
      },
      {
        item: '其他',
        中型: 50,
        小微: 40,
      },
    ];
    const dv = new DataView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['小微', '中型'],
      key: 'user',
      value: 'score',
    });
    const cols = {
      score: {
        min: 0,
        max: 80,
      },
    };
    return (
      <Chart
        height={320}
        data={dv}
        padding={[60, 20, 40, 20]}
        scale={cols}
        forceFit
      >
        <Coord type="polar" radius={0.8} />
        <Axis
          name="item"
          line={null}
          tickLine={null}
          label={{
            textStyle: {
              fill: '#fff',
            },
          }}
          grid={{
            lineStyle: {
              lineDash: null,
            },
            hideFirstLine: false,
          }}
        />
        <Tooltip />
        <Axis
          name="score"
          line={null}
          tickLine={null}
          label={{
            textStyle: {
              fill: '#fff',
            },
          }}
          grid={{
            type: 'polygon',
            lineStyle: {
              lineDash: null,
            },
            alternateColor: 'rgba(0, 0, 0, 0.04)',
          }}
        />
        <Legend name="user" marker="circle" offset={30} />
        <Geom type="area" position="item*score" color="user" />
        <Geom type="line" position="item*score" color="user" size={2} />
        <Geom
          type="point"
          position="item*score"
          color="user"
          shape="circle"
          size={4}
          style={{
            stroke: '#fff',
            lineWidth: 1,
            fillOpacity: 1,
          }}
        />
      </Chart>
    );
  }
}

export default Basic;
