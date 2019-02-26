import React, { Component } from 'react';
import { Table, Icon, Pagination, Balloon } from '@alifd/next';
import Ellipsis from '@icedesign/ellipsis';
import { Link } from 'react-router-dom';
import styles from './Schedule.module.scss'
import './Schedule.scss';


const getData = () => {
  const clients = {
    1: { zh: '刘先生', en: '个人：151****2586' },
    2: { zh: 'A股份公司', en: '企业：021-51****86' },
  };

  const amounts = {
    1: '50万',
    2: '100万',
  };

  const totals = {
    1: '80万',
    2: '200万',
  };

  const  dates = {
    1: '2019-01-25',
    2: '2019-02-01',
  };

  const  types = {
    1: 'B3类',
    2: 'B4类',
  };

  return Array.from({ length: 10 }).map((item, index) => {
    return {
      id: index + 1,
      name: clients[index % 2 + 1],
      origin: {
        director: '东方红一号',
        actor: '保本型',
        company: '东方红集团',
      },
      type: types[index % 2 + 1],
      dayReturns: amounts[index % 2 + 1],
      accReturns: totals[index % 2 + 1],
      date: dates[index % 2 + 1],
      score: '9.5',
    };
  });
};

export default class Schedule extends Component {
  static displayName = 'Schedule';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      isLoading: false,
      dataSource: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  mockApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData());
      }, 600);
    });
  };

  fetchData = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        this.mockApi().then((data) => {
          this.setState({
            dataSource: data,
            isLoading: false,
          });
        });
      }
    );
  };

  /**
   * 页码发生改变时的回调函数
   */
  handleChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.fetchData();
      }
    );
  };

  renderId = (value, index) => {
    const ranking = {
      1: { color: 'red' },
      2: { color: 'rgba(255, 0, 0, 0.8)' },
      3: { color: 'rgba(255, 0, 0, 0.6)' },
    };
    return (
      <div className={styles.ranking} style={ranking[index + 1]}>
        NO.
        {value}
      </div>
    );
  };

  renderName = (value) => {
    return (
      <div className={styles.name}>
        <div className={styles.zh}><Link to="#">{value.zh}</Link></div>
        <div className={styles.en}>{value.en}</div>
      </div>
    );
  };

  renderDayReturns = (value) => {
    return (
      <div className={styles.dayReturns}>
        <div className={styles.returns}>{value.returns}</div>
        </div>
    );
  };

  renderOrigin = (value) => {
    const Info = (ellipsis = false) => {
      return (
        <div className={styles.origin}>
          <div className={styles.director}>
            产品名称：
            {value.director}
          </div>
          <div className={styles.actor}>
            风险类型：
            {value.actor}
          </div>
          <div className={styles.company}>
            {ellipsis ? (
              <Ellipsis
                showTooltip={false}
                lineLimit={1}
                text={`发行公司：${value.company}`}
              />
            ) : (
              `发行公司：${value.company}`
            )}
          </div>
        </div>
      );
    };
    return (
      <Balloon
        trigger={Info(true)}
        align="r"
        alignEdge
        triggerType="click"
        closable={false}
        style={{ width: 300,background:'#21293f' }}
      >
        <div className={styles.balloonContent}>
          <h3 className={styles.balloonTitle}>详细信息</h3>
          {Info()}
        </div>
      </Balloon>
    );
  };

  renderScore = (value) => {
    return <div className={styles.score} >{value}</div>;
  };

  render() {
    const { dataSource, isLoading } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.head}>
          <h3 className={styles.title}>2018年12月风险预测</h3>
          <p className={styles.desc}>更新时间：2018年12月11日 12：00</p>
        </div>
        <div className={styles.summary}>预测风险额度：10 亿</div>
        <Table
          dataSource={dataSource}
          loading={isLoading}
          className="custom-table"
          style={{ minHeight: '400px' }}
        >
          <Table.Column
            align="center"
            title="排名"
            dataIndex="id"
            cell={this.renderId}
            style={{ borderRadius: '0px' }}
          />
          <Table.Column
            align="center"
            title="用户名称"
            dataIndex="name"
            cell={this.renderName}
          />
          <Table.Column
            align="center"
            title="所购产品"
            dataIndex="origin"
            cell={this.renderOrigin}
          />
          <Table.Column align="center" title="抗风险类型" dataIndex="type" />
          <Table.Column
            align="center"
            title="当期金额"
            dataIndex="dayReturns"
          />
          <Table.Column
            align="center"
            title="累计金额"
            dataIndex="accReturns"
          />
          <Table.Column align="center" title="风险触发日期" dataIndex="date" />
          <Table.Column
            align="center"
            title="风险评估"
            dataIndex="score"
            cell={this.renderScore}
            style={{ borderRadius: '0px'}}
          />
        </Table>
        <Pagination
          className={styles.pagination}
          current={this.state.current}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

