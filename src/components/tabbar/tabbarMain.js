import React, { Component } from 'react';
import TabBarChild from './tabbarChild';
import tabbarStyle from '../../css/tabbar/tabbar.module.less'

class TabBarMain extends Component {

  constructor(){
    super();
  }

  buildRow(){
    let rows=[];
    for (let i in this.props.tabBtn){
      rows.push(<TabBarChild name={this.props.tabBtn[i]} id={this.props.id}></TabBarChild>);
      //路由未写
    }
    return rows;
  }

  render() {
    return (
      <div className={tabbarStyle.main}>
        {this.buildRow()} 
        
      </div>
    );
  }
}

export default TabBarMain;
