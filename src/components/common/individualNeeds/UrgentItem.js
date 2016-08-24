import React, { Component, PropTypes } from 'react';
// common
import config from 'components/common/config'

class UrgentItem extends Component {

  static propTypes = {
    meal: PropTypes.number,
    urgent: PropTypes.number,
    decFn: PropTypes.func,
    inc: PropTypes.func,
  }

  render() {
    const {
      meal,
      urgent,
      decFn,
      incFn
    } = this.props;
    // 加急图标切换
    let urgent_dec_img, 
        urgent_inc_img;
    switch(urgent) {
      case 0:
        urgent_dec_img = require(`./decrease.png`);
        urgent_inc_img = require(`./increase.png`);
        break;
      case 3:
        urgent_dec_img = require(`./decrease_hover.png`);
        urgent_inc_img = require(`./increase_hover.png`);
        break;
      default:
        urgent_dec_img = require(`./decrease_hover.png`);
        urgent_inc_img = require(`./increase.png`);
        break;
    }

    return (
      <div className={`item clearfix text-left ${urgent > 0 ? "item-active" : ''}`}>
        <span className="price num-font">
          {`¥ ${config.meal[meal].ext_price}`}
        </span>

        <div className="item-title clearfix">
          <span>加急</span>
          <span className="item-ext pull-right">
            <span
              className="dec"
              onClick={decFn}>
              <img src={urgent_dec_img} alt="dec" />
            </span>

            <span className="count">{urgent} 天</span>

            <span
              className="inc"
              onClick={incFn}>
              <img src={urgent_inc_img} alt="inc" />
            </span>
          </span>
        </div>
        <div className="item-descriptions ext-descriptions">
          {`影片初稿完成标准时间是${config.meal[meal].ext_days}天，每加${config.meal[meal].ext_price}元提前一天完成`}
        </div>
      </div>
    );
  }
}

export default UrgentItem;
