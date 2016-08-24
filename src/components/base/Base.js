import React, { Component } from 'react';
import './base.css';

//配置路由，其他组件放在base下面
class Base extends Component {
  render() {
   return  (
     <div className="container">        
        {this.props.children}       
     </div>
   )
  }
}

export default Base;