import React, { Component } from 'react';
import DevelopingStyle from '../../css/developing/developing.module.less'

class Developing extends Component {
  render() {
    return (
        <div className={DevelopingStyle.developing}>
          This page is developing now!!
        </div>
    );
  }
}

export default Developing;
