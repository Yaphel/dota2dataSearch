import React, { Component } from 'react';
import pc from '../../css/player.module.less'
import PlayerHeader from './playerHeader/playerHeader';

class Player extends Component {
  constructor(){
    super();
    
  }

  render() {

    const match=this.props.match
    //loading wait to add
    return ( 
        <div className={pc.layout}>
        <PlayerHeader id={match.params.playerid}></PlayerHeader>
        </div>
    );
  }
}

export default Player;
