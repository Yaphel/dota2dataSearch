import React, { Component } from 'react';
import pc from '../../../css/player.module.less'

import ListMain from '../../list/listmain.js';

import fetch from 'cross-fetch'
import Loading from '../loading'
import match from '../../../data/recentmatches'
import hero from '../../../data/heroes'

class WardMap extends Component {

  componentDidMount(){
    //获取玩家账号名称&&头像

  let islocation=true;//数据本地化
    if(islocation){
      this.setState({match});

      this.setState({hero});
      
      this.setState({isLoading:false})
    }else{
      //获取玩家比赛信息
      fetch(
        'https://api.opendota.com/api/players/'+ this.props.match.params.playerid +'/recentMatches'
      )
      .then(res => res.json())
      .then(match => {
        this.setState({match})
      })
      .then(
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
  }
  constructor(){
    super();
    this.state={
      isLoading:true
    }
  }

  render() {
    return this.state.isLoading?(
      <Loading></Loading>
    ):(  
      <div className={pc.overview}>
        <ListMain title={'Recent Matches'} content={this.state.match} rule={['hero1','result','gamemode','duration','k','d','a']} headContent={['HERO','RESULT','GAME MODE','DURATION','K','D','A']} cs={'custom1'} number={20} style={'custom1'}></ListMain>
        <ListMain title={'Heros Played'} content={this.state.hero} rule={['hero2','mp','win']} headContent={['HERO','MP','WIN']} cs={'custom2'} number={10} style={'custom2'}></ListMain>
      </div>
    );
  }
}

export default WardMap;
