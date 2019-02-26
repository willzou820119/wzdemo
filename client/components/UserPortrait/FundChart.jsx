import React from "react";
import ChartTitle from './ChartTitle';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

class FundChart extends React.Component {
  render() {
    const data = [
      {
        month: "50以下",
        acc: 100
      },
      {
        month: "50-200万",
        acc: 500
      },
      {
        month: "200-500万",
        acc: 300
      },
      {
        month: "500-1000万",
        acc: 150
      },
      {
        month: "1000-1500万",
        acc: 80
      },
      {
        month: "1500-3000万",
        acc: 50
      },
      {
        month: "3000-5000万",
        acc: 20
      },
      {
        month: "5000万以上",
        acc: 15
      }
    ];
    const cols = {
      month: {
        alias: "资金实力"
      },
      acc: {
        alias: "客户数"
      }
    };
    
    const styles = {
    bolder: {
      borderTop: '1px dashed grey'
    }
  };
    return (
      <div style={styles.bolder}>
        <ChartTitle title="资金-客户数分布" />
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis
            name="month"
            title={null}
            tickLine={null}
            line={{
              stroke: "#E6E6E6"
            }}
          />
          <Axis
            name="acc"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="line"
            position="month*acc"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
              shadowBlur: 60,
              shadowOffsetY: 6
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default FundChart;
