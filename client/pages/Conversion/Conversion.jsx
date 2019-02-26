import React, { Component } from 'react';
import PassengerFlow from '../../components/PassengerFlow';
import UserStatChart from '../../components/UserStatChart';

export default class Conversion extends Component {
  render() {
    return (
      <div>
        <PassengerFlow title="最受欢迎产品" />
        <UserStatChart title="产品-用户分析" />
      </div>
    );
  }
}
