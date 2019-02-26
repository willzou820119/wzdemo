/* eslint react/jsx-no-target-blank: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Grid } from '@alifd/next';
import Icon from '@icedesign/foundation-symbol';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const mockData = [
  {
    icon: 'shop',
    title: '累计咨询用户数',
    desc: '这里是一些说明',
    count: '341',
    total: '32,434',
    period: '16%',
  },
  {
    icon: 'coupons',
    title: '新增用户数',
    desc: '这里是一些说明',
    count: '82',
    total: '2,349',
    period: '15%',
  },
  {
    icon: 'person',
    title: '流失用户数',
    desc: '这里是一些说明',
    count: '23',
    total: '475',
    period: '-7%',
  },
];

export default class EventsOverview extends Component {
  render() {
    return (
      <IceContainer className={styles.container}>
        <Row wrap>
          {mockData.map((item, index) => {
            return (
              <Col key={index} l="8" className={styles.item}>
                <div className={styles.itemIcon}>
                  <Icon size="xl" type={item.icon} />
                </div>
                <div className={styles.body}>
                  <div className={styles.title}>
                    {item.title}
                    <span className={styles.extraIcon}>
                      <Balloon
                        trigger={<Icon type="help" size="xs" />}
                        triggerType="hover"
                        closable={false}
                        align="t"
                      >
                        {item.desc}
                      </Balloon>
                    </span>
                  </div>
                  <div className={styles.count}>{item.count}</div>
                  <div className={styles.data}>
                    <span>累计 {item.total}</span>
                    <span className={styles.period}>周同比 {item.period}</span>
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
