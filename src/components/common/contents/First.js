import React, { Component} from 'react';
import './content.css';

class Introducer extends Component {
  render() {
    return(
      <div className="first">
        <div className="upload">         
            <p>第一步</p>
            <p>上传视频及照片</p>
            <div className="load">
              <div></div>
              <p>请从电脑上传图片or把图片拖到这里</p>
              <div>选择文件</div>
            </div>                  
        </div>
        <div className="other">
          <p>- 或者 -</p>
          <p><span>第三方网盘</span><span>(选项)</span></p>
          <p>请输入网盘链接，密码请用括号表示，如需填写多个链接请用逗号隔开</p>
          <div>
            <input type="text" placeholder="https://yunpan.cn/dfajldu (提取码:10fb)”"/>
          </div> 
          <p>- 或者 -</p>
          <p><span>硬盘邮寄</span><span>(选项)</span></p>
          <p>如所需素材文件较大，请留下您的联系方式，我们会安排专人将爱影素材拷贝硬盘快递给您</p>
          <div>
             <input type="text" placeholder="姓名"/>
             <input type="text" placeholder="联系电话"/>
          </div>
          <div>
            <input type="text" placeholder="地址"/>
          </div>                  
        </div>
      </div>
    )
  }
}

export default Introducer;