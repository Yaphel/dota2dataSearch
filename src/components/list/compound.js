import React, { Component } from 'react';
import ListStyle from '../../css/list/util.module.less'

class Compound extends Component {
  constructor(){
    super();
  }

  //此组件继承两个值，分别展示在上下。
  //传入color属性，决定上层颜色。

  judgeColor(c){
    switch(c){
      case 'green':
        return ListStyle.green;
      case 'red':
        return ListStyle.red;
      case 'blue':
        return ListStyle.blue;
      case 'white':
        return ListStyle.white;
    }
  }

  render() {
    let a=this.judgeColor(this.props.color);
    return (
      <div className={ListStyle.compound}>
        <p className={a}>{this.props.top}</p>
        <p>{this.props.btm}</p>
      </div>
    );
  }
}

export default Compound;
