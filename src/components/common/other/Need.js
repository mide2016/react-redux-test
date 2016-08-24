import React, { Component, PropTypes } from 'react';

import './other.css';

class Need extends Component {
  render() {
    return(
      <div className="need">
        <div>个性需求</div>
        <div>加点料，让您的影片更加与众不同</div>
        <div className="list">
          <div className="item">
            <span className="price_num">¥ 188</span>
            <div>
              <span className="item_title">微信页面</span>
              <span><img src="<%=" /></span>
            </div>
            <div className="item_descriptions">微信朋友圈传播页面</div>
          </div>
          <div className="item">
            <span className="price_num">¥ 499</span>
            <div>
              <span className="item_title">音乐配乐</span>
              <span><img /></span>
            </div>
            <div className="item_descriptions">精选无版权网络音乐</div>
          </div>
          <div className="item">
            <span className="price_num">¥ 499</span>
            <div>
              <span className="item_title">视觉效果</span>
              <span><img /></span>
            </div>
            <div className="item_descriptions">简单的动画效果、视觉包装</div>
          </div>
          <div className="item">
            <span className="price_num">¥ 500</span>
            <div>
              <span className="item_title">加急</span>
              <span>
                <span><img /></span>
                <span>0 天</span>
                <span><img /></span>
              </span>
            </div>
            <div className="item_descriptions">影片初稿完成标准时间是5天，每加500元提前一天完成</div>
          </div>
        </div>       
    </div>
      
    )
  }
}

export default Need;