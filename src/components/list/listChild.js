import React, { Component } from 'react';
import Compound from './compound'
import ListStyle from '../../css/list/util.module.less'
import customizeStyle1 from '../../css/list/customize1.module.less'
import customizeStyle2 from '../../css/list/customize2.module.less'


class Li extends Component {
  constructor(){
    super();
  }
  
  judgeWinner(){
    if(parseInt(this.props.content.player_slot)<125){
      if(this.props.content.radiant_win){
        return 'Won Match';
      }else{
        return 'Lost Match';
      }
    }else{
      if(this.props.content.radiant_win){
        return 'Lost Match';
      }else{
        return 'Won Match';
      }
    }
  }
  judgeLobbyType(){
    if(this.props.content.lobby_type==0){
      return 'normal';
    }else{
      return 'Ranked';
    }
  }
  judgeGameMode(){
    if(this.props.content.game_mode==3){
      return 'Random Draft';
    }else{
      return 'All Draft';
    }
  }
  judgeSkill(){
    if(this.props.content.skill==3){
      return 'Very High Skill';
    }else if(this.props.content.skill==2){
      return 'High Skill';
    }else{
      return 'Normal Skill';
    }
  }
  judgeDuration(){
    let d=parseInt(this.props.content.duration);
    let m,s;
    s=d%60;
    m=(d-s)/60

    return m.toString()+':'+((s>=10)?s.toString():('0'+s.toString()));
  }
  judgeIsRadiant(){
    if(parseInt(this.props.content.player_slot)<125){
      return 'Radiant';
    }else{
      return 'Dire';
    }
  }
  judgeHeroName(){

  }
  judgeTime(){

  }
  judgeWinRate(){
    var rate=parseInt(this.props.content.win)/(parseInt(this.props.content.games))*100;
    rate=rate.toFixed(1);
    return rate;
  }



  customize(cs,rows){
    switch(cs){
      case 'custom1':
        return(
          <div className={customizeStyle1.li}>
            {rows}
          </div>
        )
      case 'custom2':
        return(
          <div className={customizeStyle2.li}>
            {rows}
          </div>
        )
    }

  }

  buildHead(){
    let rows=[];
    for(let i in this.props.headContent){
      rows.push(<div>{this.props.headContent[i]}</div>)
    }
    return (
      <li className={ListStyle.lihead}>
        {this.customize(this.props.cs,rows)}
      </li>
    )
  }
  buildRow(){
    let rows=[];
    for(let key in this.props.rule){
      switch(this.props.rule[key]){
        //compound
        case 'hero':
          rows.push(this.setStyle('compound',this.judgeHeroName(),this.judgeTime(),'blue'));
          break;
        case 'result':
          rows.push(this.setStyle('compound',this.judgeWinner(),this.judgeLobbyType(),'result'));
          break;
        case 'gamemode':
          rows.push(this.setStyle('compound',this.judgeGameMode(),this.judgeSkill(),'white'));
          break;
        case 'duration':
          rows.push(this.setStyle('compound',this.judgeDuration(),this.judgeIsRadiant(),'white'));
          break;
        case 'player':

        //img
        case 'heroimg':
          rows.push(this.setStyle('img'));
          break;
        //p
        case 'k':
          rows.push(this.setStyle('p',this.props.content.kills));
          break;
        case 'd':
          rows.push(this.setStyle('p',this.props.content.deaths));
          break;
        case 'a':
          rows.push(this.setStyle('p',this.props.content.assists));
          break;
        case 'mp':
          rows.push(this.setStyle('p',this.props.content.games));
          break;
        case 'win':
          rows.push(this.setStyle('p',this.judgeWinRate()));
          break;
      }
    }
    return (
      <li className={ListStyle.li}>
        {this.customize(this.props.cs,rows)}
      </li>
    )
  }
  setStyle(style,value1,value2,cl){
    switch(style){
      case 'img':
        return (
        <div>
          <img className={ListStyle.img} src={value1}></img>
        </div>
        )
      case 'p':
        return (
          <div>
            <p className={ListStyle.p}>{value1}</p>
          </div>
        )
      case 'compound':
          if(cl=='result'){
            if(value1=='Won Match'){
              return (<Compound top={value1} btm={value2} color={'green'}></Compound>)
            }else{
              return (<Compound top={value1} btm={value2} color={'red'}></Compound>)
            }
          }
        return (<Compound top={value1} btm={value2} color={cl}></Compound>)
    }
  }
  render() {
    return (this.props.head)?(
      this.buildHead()
    ):(
      this.buildRow()
    );
  }
}

export default Li;
