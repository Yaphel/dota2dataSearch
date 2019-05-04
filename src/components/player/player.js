import React, { Component } from 'react';
import fetch from 'cross-fetch'
import Loading from './loading.js'
import pc from '../../css/player.module.less'
import Ranktire from './ranktier'
import ListMain from '../list/listmain.js';
import PlayerInfo from './playerInfo/playerInfo.js';
import customizeStyle1 from '../../css/list/customize1.module.less'
import customizeStyle2 from '../../css/list/customize1.module.less'
import TabBarMain from '../tabbar/tabbarMain.js';

class Player extends Component {
  componentDidMount(){
    //获取玩家账号名称&&头像
    fetch(
      'https://api.opendota.com/api/players/' + this.props.match.params.playerid
    ).then(res => res.json())
    .then(data => {
      this.setState({data})
    }).then(
      //获取玩家比赛信息
      fetch(
        'https://api.opendota.com/api/players/'+ this.props.match.params.playerid +'/recentMatches'
      ).then(res => res.json())
      .then(match => {
        this.setState({match})
      })
    ).then(
      //获取玩家比赛信息
      fetch(
        'https://api.opendota.com/api/players/'+ this.props.match.params.playerid +'/heroes'
      ).then(res => res.json())
      .then(hero => {
        this.setState({hero})
        this.setState({isLoading:false})
      })
    )
    
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
            <PlayerInfo id={this.props.match.params.playerid} person={this.state.data.profile.personaname}></PlayerInfo>
            <Ranktire rt={this.state.data.rank_tier} className={pc.rank}></Ranktire>
          </div>
          <div>
            <TabBarMain tabBtn={['Overview','Matches']}></TabBarMain>
          </div>
          <div className={pc.countContainer}></div>
          <ListMain title={'Recent Matches'} content={this.state.match} rule={['hero','result','gamemode','duration','k','d','a']} headContent={['HERO','RESULT','GAME MODE','DURATION','K','D','A']} cs={'custom1'}></ListMain>
          <ListMain title={'Heros Played'} content={this.state.hero} rule={['hero','mp','win']} headContent={['HERO','MP','WIN']} cs={'custom2'}></ListMain>
        
        </div>
    );
    //在我看来，做分页还是要在上层做比较合适
  }
}

export default Player;
