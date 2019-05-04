import React, { Component } from 'react';
import WinLost from './winlost'
import Pi from '../../../css/player/playerInfo/playerInfo.module.less'

class PlayerInfo extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className={Pi.playerInfo}>
        <div className={Pi.playerName}>
          <span>{this.props.person}</span>
        </div>
        <WinLost id={this.props.id}></WinLost>
      </div>

    );
  }
}

export default PlayerInfo;
