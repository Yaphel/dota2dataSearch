import React, { Component } from 'react';
import Li from './listChild';
import ListStyle1 from '../../css/list/util1.module.less'
import ListStyle2 from '../../css/list/util2.module.less'
import ListStyle3 from '../../css/list/util3.module.less'
import ListStyle4 from '../../css/list/util4.module.less'

class ListMain extends Component {

  constructor(){
    super();
  }

  /*
  ListMain传入属性：
  title:  列表名字
  content:  列表待处理内容
  rule:  显示规则
  headContent:  LiHead中的内容
  number: 单页显示数目
  cs: child-style
  style:main-style


    Li 传入属性：
    head:是否是表头
    content：待处理内容
    rule：显示规则,值为特征值名称
    headContent：表头内容

    head-content和rule有一定重叠性，考虑到语言相关的问题，所以做了区分。以后可能会加语言包。
  */

 renderStyle(s,a){
  switch(s){
    case 'custom1':
      return(
      <ul className={ListStyle1.ul}>
        <title>{this.props.title}</title>
        {a}
      </ul>
      )
    case 'custom2':
      return(
    <ul className={ListStyle2.ul}>
      <title>{this.props.title}</title>
      {a}
    </ul>
    )
    case 'custom3':
      return(
    <ul className={ListStyle3.ul}>
      <title>{this.props.title}</title>
      {a}
    </ul>
    )
    case 'custom4':
      return(
    <ul className={ListStyle4.ul}>
      <title>{this.props.title}</title>
      {a}
    </ul>
    )

  }
}

  renderTable(){
    if(this.props.content!=null){
      let a= this.props.content;
      let rows=[];
      rows.push(<Li head={true} headContent={this.props.headContent} cs={this.props.cs}></Li>)
      for(let i=0;i<Math.min(this.props.number,a.length);i++){
        rows.push(<Li content={a[i]} head={false} rule={this.props.rule} headContent={this.props.headContent} cs={this.props.cs}></Li>)
      }
      return rows;
    }else{
      return null;
    }
  }

  

  render() {
    let a=this.renderTable();
    return (a)?(
      this.renderStyle(this.props.style,a)
    ):(
      <div>
        no data
      </div>
    );
  }
}

export default ListMain;
