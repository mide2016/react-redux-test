import React, { Component } from 'react';
import './public.css';

class Navigation extends Component {
  
  render() {
    return (
      <div className="navigation">       
        <div className="loge" />       
        <ul className="nav">
          <li>竞价制作</li>
          <li>套餐制作</li>
          <li>私人定制</li>
        </ul>
        <div className="tobe">
          <span>成为爱影剪辑师</span>
        </div>
      </div>
    )
  }
}

export default Navigation;