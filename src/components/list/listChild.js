import React, { Component } from 'react';
import Compound from './compound'
import ListStyle from '../../css/list/util1.module.less'
import customizeStyle1 from '../../css/list/customize1.module.less'
import customizeStyle2 from '../../css/list/customize2.module.less'


class Li extends Component {
  constructor(){
    super();
  }
  judgeHeroImg(){
    let r=Math.random();
    if(r<0.3){
      return require("../../pic/heroName1.png")
    }else if(r<0.5){
      return require("../../pic/heroName2.png")
    }else if(r<0.7){
      return require("../../pic/heroName3.png")
    }else{
      return require("../../pic/heroName4.png")
    }
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
    return "Hero Name";
  }
  judgeTime(second){
    let date=new Date();
    date=parseInt(date/1000);
    let time=date-second;
    if(time>(3600*24*365)){
      time=parseInt(time/(3600*24*365));
      return time+" Years Ago"
    }else if(time>(3600*24*30)){
      time=parseInt(time/(3600*24*30));
      return time+" Months Ago"
    }else if(time>(3600*24)){
      time=parseInt(time/(3600*24));
      return time+" Days Ago"
    }else if(time>3600){
      time= parseInt(time/3600);
      return time+" Hours Ago"
    }else{
      return "Time Error"
    }
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
        case 'hero1':
          rows.push(this.setStyle('compoundimg',this.judgeHeroName(),this.judgeTime(this.props.content.start_time),'blue'));
          break;
        case 'hero2':
          rows.push(this.setStyle('compoundimg',this.judgeHeroName(),this.judgeTime(this.props.content.last_played),'blue'));
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
      case 'compoundimg':
          if(cl=='result'){
            if(value1=='Won Match'){
              return (<Compound top={value1} btm={value2} color={'green'} haveImg={true} imgsrc={this.judgeHeroImg()}></Compound>)
            }else{
              return (<Compound top={value1} btm={value2} color={'red'} haveImg={true} imgsrc={this.judgeHeroImg()}></Compound>)
            }
          }
        return (<Compound top={value1} btm={value2} color={cl} haveImg={true} imgsrc={this.judgeHeroImg()}></Compound>)
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
