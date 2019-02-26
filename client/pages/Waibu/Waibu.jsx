import React, { Component } from "react";
 
export default class Waibu extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.open("http://www.baidu.com");
  }
  render(){
    return (<div>已跳转页面...</div>);
  }
}