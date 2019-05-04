import React, { Component } from 'react';
import { Spin } from 'antd';

class Loading extends Component {
  //此处可以通过传值判断页面位置进行具体骨架屏的加载
  render() {
    return (
      <Spin size="large" />
    );
  }
}

export default Loading;
