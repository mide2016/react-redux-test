import React, {Component} from 'react';
import './other.css';

class Information extends Component {
  render() {
    return(
      <div className="information">
        <p>联系信息<span>（必填）</span></p>
        <div><input placeholder="姓名"/></div>
        <div><input placeholder="邮箱或手机"/></div>
      </div>
    )
  }
}

export default Information;