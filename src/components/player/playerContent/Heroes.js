import React, { Component } from 'react';
import pc from '../../../css/player.module.less'

import ListMain from '../../list/listmain.js';

import fetch from 'cross-fetch'
import Loading from '../loading'
import hero from '../../../data/heroes'

class Heroes extends Component {

  componentDidMount(){
    //获取玩家账号名称&&头像

  let islocation=true;//数据本地化
    if(islocation){

      this.setState({hero});
      
      this.setState({isLoading:false})
    }else{
      //获取玩家比赛信息
      fetch(
        'https://api.opendota.com/api/players/'+ this.props.match.params.playerid +'/heroes'
      ).then(res => res.json())
      .then(hero => {
        this.setState({hero})
        this.setState({isLoading:false})
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
          <ListMain title={'Heroes Played'} content={this.state.hero} rule={['hero2','heromp','herowr','heroww','herowwwr','heroag','heroagwr']} headContent={['HERO','MP','WIN%','WITH','WIN WITH%','AGAINST','WIN AGAINST']} cs={'custom4'} number={100} style={'custom4'}></ListMain>
        </div>
      </div>
    );
  }
}

export default Heroes;
