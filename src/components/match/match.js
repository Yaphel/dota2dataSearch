import React, { Component } from 'react';
import MatchOverView from './matchoverview'
import MatchDetail from './matchdetail'

class Match extends Component {
  componentDidMount(){
    //获取玩家账号名称&&头像
    fetch(
      'https://api.opendota.com/api/matches/' + this.props.match.params.matchid
    ).then(res => res.json())
    .then(match => {
      this.setState({match})
      this.setState({isLoading:false})
    })
  }

  constructor(){
    super();
    this.state={
      isLoading:true
    }
  }
//<TabBarMain tabBtn={['Overview','Matches','Heroes']} id={this.props.id}></TabBarMain>
  render() {
    return (
        <div>
          <MatchOverView></MatchOverView>
          <MatchDetail></MatchDetail>
        </div>
    );
  }
}

export default Match;
