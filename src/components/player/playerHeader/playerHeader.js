import React, { Component } from 'react';
import fetch from 'cross-fetch'
import Loading from '../loading.js'
import pc from '../../../css/player.module.less'
import Ranktire from '../ranktier'
import PlayerInfo from '../playerInfo/playerInfo.js';
import TabBarMain from '../../tabbar/tabbarMain.js';

import data from '../../../data/players'

class PlayerHeader extends Component {
  componentDidMount(){
    //获取玩家账号名称&&头像

  let islocation=true;//数据本地化
    if(islocation){
      this.setState({data});
      
      this.setState({isLoading:false})
    }else{
      fetch(
        'https://api.opendota.com/api/players/' + this.props.id
      ).then(res => res.json())
      .then(data => {
        this.setState({data});
        this.setState({isLoading:false});
      })
    }
  }
  
  componentWillMount(){

  }
  constructor(){
    super();
    this.state={
      isLoading:true
    }
  }
  
  render() {
    //loading wait to add
    return this.state.isLoading?(
      <Loading></Loading>
    ):( 
        <div className={pc.layout}>
          <div className={pc.container}>
            <img className={pc.avatar} src={this.state.data.profile.avatarfull} ></img>
            <PlayerInfo id={this.props.id} person={this.state.data.profile.personaname}></PlayerInfo>
            <Ranktire rt={this.state.data.rank_tier} className={pc.rank}></Ranktire>
          </div>
          <div>
            <TabBarMain tabBtn={['Overview','Matches','Heroes']} id={this.props.id}></TabBarMain>
          </div>
        </div>
    );
  }
}

export default PlayerHeader;
