import React, { Component } from 'react';
import tabbarStyle from '../../css/tabbar/tabbar.module.less'
import {NavLink} from 'react-router-dom'
class TabBarChild extends Component {

  constructor(){
    super();
  }


  
  render() {
    return (
      <div className={tabbarStyle.a}>
        <NavLink to={"/player/"+this.props.id+"/"+this.props.name} activeClassName="hurray">
          {this.props.name}
        </NavLink>
      </div>
    );
  }
}

export default TabBarChild;
