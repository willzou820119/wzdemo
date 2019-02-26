import React, { Component } from 'react';
import { DatePicker, Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../ContainerTitle';

const { Row, Col } = Grid;

const mockData = [
  {
    title: '东方红一号保本型',
    count: '300',
    value: '30,000',
    ratio: '6%',
    change: 'up',
  },
  {
    title: '年年盈高收益型',
    count: '50',
    value: '5,000',
    ratio: '12%',
    change: 'down',
  },
  {
    title: '东旭光电混合型',
    count: '30',
    value: '3,000',
    ratio: '10%',
    change: 'up',
  },
  {
    title: '阳光众筹高风险',
    count: '80',
    value: '8,000',
    ratio: '10%',
    change: 'up',
  },
  {
    title: '现金宝1号低风险',
    count: '100',
    value: '10,000',
    ratio: '20%',
    change: 'down',
  }
];

export default class PassengerFlow extends Component {
  render() {
    const { title } = this.props;
    return (
      <IceContainer>
        <ContainerTitle
          title={title}
          style={{ marginBottom: '20px' }}
        />
        <Row wrap gutter="20">
          {mockData.map((item, index) => {
            return (
              <Col l="4" key={index}>
                <div style={styles.item}>
                  <div style={styles.title}>{item.title}</div>
                  <div style={styles.num}>累计 {item.count} 人 | {item.value} 万</div>
                  <div style={styles.ratio}>
                    <Icon style={item.change==="up"? styles.arrowupIcon:styles.arrowdownIcon}
                      type={`arrow-${item.change}`} 
                      size="small"
                    />
                    环比{item.change==="up"? "上涨":"下跌"} {item.ratio}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </IceContainer>
    );
  }
}

const styles = {
  item: {
    border: '1px solid #e1e2e3',
    padding: '15px',
  },
  title: {
    color: '#fff',
    fontSize: '13px',
    marginBottom: '15px',
  },
  num: {
    color: '#2077FF',
    fontWeight: '600',
    marginBottom: '15px',
  },
  ratio: {
    color: '#fff',
    fontSize: '13px',
  },
  arrowIcon: {
    marginRight: '5px',
  },
  arrowupIcon: {
    marginRight: '5px',
    color: 'red',
  },
  arrowdownIcon: {
    marginRight: '5px',
    color: 'green',
  },
};
