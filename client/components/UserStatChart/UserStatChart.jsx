import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label } from 'bizcharts';
import { Grid, DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../ContainerTitle';

const { Row, Col } = Grid;

export default class UserStatChart extends Component {
  static displayName = 'UserStatChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <ContainerTitle
          title={title}
          extraAfter={
            <DatePicker onChange={(val, str) => console.log(val, str)} />
          }
          style={{ marginBottom: '20px' }}
        />
        <Row wrap gutter="20">
          <Col xxs="24" s="15" l="15">
            <IceContainer title="用户增长数量（人）" >
              <Chart
                height={350}
                data={userData}
                forceFit
                padding={[40, 40, 40, 40]}
              >
                <Axis name="month" />
                <Axis name="count" />
                <Tooltip crosshairs={{ type: 'y' }} />
                <Geom type="interval" position="month*count" />
              </Chart>
            </IceContainer>
          </Col>
          <Col xxs="24" s="9" l="9">
            <IceContainer title="资金增长额（万）">
              <Chart
                height={124}
                data={ageData}
                forceFit
                padding={[10, 10, 40, 40]}
              >
              <Axis name="age" />
              <Axis name="count" />
                <Tooltip crosshairs={{ type: 'y' }} />
                <Geom type="interval" position="age*count" />
              </Chart>
            </IceContainer>

            <IceContainer title="风险分布">
              <Chart
                height={124}
                data={sexRatio}
                forceFit
                padding={[0, 60, 0, 0]}
              >
                <Coord type="theta" radius={0.75} />
                <Axis name="percent" />
                <Legend position="right" offsetY={-44} offsetX={-40} />
                <Tooltip showTitle={false} />
                <Geom
                  type="intervalStack"
                  position="percent"
                  color="item"
                  tooltip={[
                    'item*percent',
                    (item, percent) => {
                      percent += '%';
                      return {
                        name: item,
                        value: percent,
                      };
                    },
                  ]}
                  style={{ lineWidth: 1, stroke: '#fff' }}
                >
                  <Label
                    content="percent"
                    offset={-20}
                    textStyle={{
                      rotate: 0,
                      textAlign: 'center',
                      shadowBlur: 2,
                      shadowColor: 'rgba(0, 0, 0, .45)',
                    }}
                  />
                </Geom>
              </Chart>
            </IceContainer>
          </Col>
        </Row>
      </div>
    );
  }
}

const sexRatio = [
  {
    item: '低',
    percent: 57,
  },
  {
    item: '中',
    percent: 30,
  },
  {
    item: '高',
    percent: 13,
  },
];

const userData = [
  {
    month: '东方红一号',
    count: 50,
  },
  {
    month: '月月盈一号 ',
    count: 60,
  },
  {
    month: '现金宝一号',
    count: 120,
  },
  {
    month: '年年红一号',
    count: 90,
  },
  {
    month: '房天下一号',
    count: 100,
  },
  {
    month: '国债一号',
    count: 300,
  },
  {
    month: '市政基金一号',
    count: 110,
  }
];

const ageData = [
  {
    age: '市政基金一号',
    count: 10,
  },
  {
    age: '国债一号',
    count: 220,
  },
  {
    age: '房天下一号',
    count: 200,
  },
  {
    age: '年年红一号',
    count: 530,
  },
  {
    age: '现金宝一号',
    count: 140,
  },
  {
    age: '月月盈一号',
    count: 1030,
  },
  {
    age: '东方红一号',
    count: 130,
  },
];
