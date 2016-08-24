import React, { Component} from 'react';
import './content.css';

class Introducer extends Component {
  render() {
    return(
      <div className="third">
        <p>第三步</p>
        <p>选择套餐</p>
        <div className="package">
           <ul>
            <li>
              <div>精美套餐</div>
              <div></div>
              <div>
                <span>¥</span>
                <span>2000</span>
              </div>
            </li>
            <li>
              <div>专业套餐</div>
              <div></div>
              <div>
                <span>¥</span>
                <span>5000</span>
              </div>
            </li>
            <li>
              <div>高级套餐</div>
              <div></div>
              <div>
                <span>¥</span>
                <span>10000</span>
              </div>
            </li>
           </ul>
        </div>
        <div className="pack_introduce">
          <div>精美套餐</div>
          <div>推荐类型：“个人短视频”——聚会、旅游、度假、个人趣味视频（papi酱）、家庭影像等。</div>
          <div>
            <ul>
              <li><div></div>如果你只想要简单地记录生活，选择这个套餐不会有错</li>
              <li><div></div>合适的音乐以及基础却神奇的剪辑加工能够帮你还原生活的本来面目</li>
              <li><div></div>简单又美好，1-2分钟的视频最为适宜哦</li>
              <li><div></div>可电话、微信、QQ、邮件沟通</li>
            </ul>
            <div>查看样片</div>
          </div>         
        </div>
      </div>
    )
  }
}

export default Introducer;