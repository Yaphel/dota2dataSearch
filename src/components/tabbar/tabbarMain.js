import React, { Component } from 'react';
import TabBarChild from './tabbarChild';

class TabBarMain extends Component {

  constructor(){
    super();
  }

  buildRow(){
    let rows=[];
    for (let i in this.props.tabBtn){
      rows.push(<TabBarChild name={this.props.tabBtn[i]}></TabBarChild>);
      //路由未写
    }
  }

  render() {
    return (
      <div>
        {this.buildRow()} 
      </div>
    );
  }
}

export default TabBarMain;
