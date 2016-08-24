import React, { Component} from 'react';
import './content.css';

class Introducer extends Component {
  render() {
    return(
      <div className="second">      
        <p>第二步</p>
        <p>需求描述</p>
        <div>
          <input 
          placeholder="影片描述，比如：“深圳大鹏之旅”"
        />
        <p>（可选填）</p>
        </div>         
        <div>
          <textarea placeholder="整体感觉，比如：“快速剪辑，节奏紧促”或“舒缓音乐，专注情感”"></textarea>
          <p>（可选填）</p>
        </div>        
      </div>
    )
  }
}

export default Introducer;