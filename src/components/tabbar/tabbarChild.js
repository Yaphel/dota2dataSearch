import React, { Component } from 'react';
import tabbarStyle from '../../css/tabbar/tabbar.module.less'
class TabBarChild extends Component {

  constructor(){
    super();
  }



  render() {
    return (
      <a className={tabbarStyle.a}>
        {this.props.name}
      </a>
    );
  }
}

export default TabBarChild;
