import React, { Component } from 'react';
import pc from '../../../css/player.module.less'

import ListMain from '../../list/listmain.js';

import fetch from 'cross-fetch'
import Loading from '../loading'
import match from '../../../data/matches'

class Matches extends Component {

  componentDidMount(){
    //获取玩家账号名称&&头像

  let islocation=true;//数据本地化
    if(islocation){
      this.setState({match});

      console.log(match)
      this.setState({isLoading:false})
    }else{
      //获取玩家比赛信息
      fetch(
        'https://api.opendota.com/api/players/'+ this.props.match.params.playerid +'/matches'
      )
      .then(res => res.json())
      .then(match => {
        this.setState({match})
      })
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
      <div className={pc.layout}>
        <div className={pc.overview}>
          <ListMain title={'Recent Matches'} content={this.state.match} rule={['hero1','result','gamemode','duration','k','d','a']} headContent={['HERO','RESULT','GAME MODE','DURATION','K','D','A']} cs={'custom3'} number={100} style={'custom3'}></ListMain>
        </div>
      </div>
    );
  }
}

export default Matches;
