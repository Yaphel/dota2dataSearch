import React, { Component } from 'react';
import { Input } from 'antd';
import '../css/global.less'
import searchcss from '../css/search.module.less'
const Search = Input.Search;

class SearchIndex extends Component {
  handleSearch(i){
    if(parseInt(i)<1000000000){//根据输入的位数进行路由
      this.props.history.push('/player/'+i)
    }else{
      this.props.history.push('/match/'+i)
    }
  }
  render() {
    return (
      <div className={searchcss.SearchBox}>
        <div className={searchcss.f1}>DOTA2</div>
        <div className={searchcss.f2}>战绩查询</div>
        <div className={searchcss.search}>
          <Search
            placeholder=" 玩家ID/比赛ID"
            onSearch={value => this.handleSearch(value)}
            enterButton
          />
        </div>
      </div>
    );
  }
}

export default SearchIndex;
