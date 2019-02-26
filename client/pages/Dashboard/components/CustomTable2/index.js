/* eslint no-mixed-operators:0 */
import React, { Component } from 'react';
import ContainerCard from '../../../../components/ContainerCard';
//import './index.scss';

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 10 }).map(() => {
    return {
      name: ['A公司', 'B公司', 'C公司', 'D公司'][random(0, 3)],
      amount: random(100000, 500000),
      usage: ['设备采购', '研发投入', '扩大市场'][random(0, 2)],
      duration: ['30天', '90天', '半年', '一年'][random(0, 3)],
      rate: '6.2%',
    };
  });
};

export default class CustomTable2 extends Component {
  render() {
    return (
      <ContainerCard title="TOP10小微企业">
        <table className="custom-table">
          <tbody>
            <tr className="thead">
              <td>公司名称</td>
              <td>贷款金额</td>
              <td>贷款用途</td>
              <td>贷款时长</td>
              <td>贷款利率</td>
            </tr>
            {getData().map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td className="custom-th">{item.amount}</td>
                  <td>{item.usage}</td>
                  <td>{item.duration}</td>
                  <td className="custom-th">{item.rate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ContainerCard>
    );
  }
}
