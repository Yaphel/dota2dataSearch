import React, { Component, PureComponent } from 'react';


class Ranktier extends Component {
  constructor(){
    super();
  }

  calcRankTier(rank_tire){
    var intrt=parseInt(rank_tire);
    let rt=[];
    let r,t;
    if(intrt==80){
      t=this.state.data.leaderboard_rank;
      const img = require("../../pic/R1/8.png")
      rt.push(img);
      if(t==null){
        t=-1;
      }else{
        t=parseInt(t);
      }
      rt.push(-1);
      rt.push(t);
    }else{
      t=intrt%10;
      r=(intrt-t)/10;
      const img1 = require("../../pic/R1/"+r+".png")
      const img2 = require("../../pic/R2/"+t+".png")
      rt.push(img1);
      rt.push(img2);
    }
    return rt;
  }

  render() {
    let rt=this.calcRankTier(this.props.rt);
    return ((rt.length==3)?(
    <div className={this.props.className}>
      <img src={rt[0]}></img>
      <p>{rt[2]}</p>
    </div>):(
    <div className={this.props.className}>
      <img src={rt[0]} ></img>
      <img src={rt[1]} style={{position:'absolute'}}></img>
    </div>
    )
        
    );
  }
}

export default Ranktier;
