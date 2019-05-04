import React, { Component } from 'react';
import Pi from '../../../css/player/playerInfo/playerInfo.module.less'

class WinLost extends Component {

  constructor(){
    super();
    this.state={
      isLoading:true
    }
  }

  componentDidMount(){
    fetch(
      'https://api.opendota.com/api/players/' + this.props.id+'/wl'
    ).then(res => res.json())
    .then(data => {
      this.setState({data})
      this.setState({isLoading:false})
    })
  }

  calcWinRate(w,l){
    var rate=(parseInt(w)/(parseInt(w)+parseInt(l)))*100;
    rate=rate.toFixed(2);
    rate=rate.toString()+'%';
    return rate;
  }

  render() {
    let rate;
    if(!this.state.isLoading){
      rate=this.calcWinRate(this.state.data.win,this.state.data.lose)
    }
    return this.state.isLoading?(<div className={Pi.wl}>
      <div>
        <span>WINS</span>
        <span className={Pi.green}>0</span>
      </div>
      <div>
        <span>LOSSES</span>
        <span className={Pi.red}>0</span>
      </div>
      <div>
        <span>WINRATE</span>
        <span className={Pi.white}>N/A</span>
      </div>
    </div>
    ):(
    <div className={Pi.wl}>
      <div>
        <span>WINS</span>
        <span className={Pi.green}>{this.state.data.win}</span>
      </div>
      <div>
        <span>LOSSES</span>
        <span className={Pi.red}>{this.state.data.lose}</span>
      </div>
      <div>
        <span>WINRATE</span>
        <span className={Pi.white}>{rate}</span>
      </div>
    </div>
    );
  }
}

export default WinLost;
