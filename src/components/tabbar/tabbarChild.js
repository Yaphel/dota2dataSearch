import React, { Component } from 'react';

class TabBarChild extends Component {

  constructor(){
    super();
  }



  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default TabBarChild;
