import React, {Component} from 'react';
import './other.css';

class Total extends Component {
  render() {
    return(
      <div className="total">        
          <div className="clearfix">
            <span>精美套餐</span>
            <span className="price">
              <span className="font-md">¥</span>
              <span className="num-font"> 2000</span>
            </span>        
          </div>   
          <div className="line"></div>     
        <div>
        <div className="totals">
          <span>总计</span>
            <span className="price">
              <span className="font-md">¥</span>
              <span className="num-font">2000</span>
            </span>      
          </div>
        </div>  
        <div className="next">下一步</div>          
      </div>
    )
  }
}

export default Total;