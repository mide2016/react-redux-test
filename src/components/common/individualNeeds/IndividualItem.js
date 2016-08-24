import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
// static
import no_btn from './no_btn.png';
import right_btn from './right_btn.png';

class IndividualItem extends Component {

  static propTypes = {
    data: PropTypes.object,
    serviceList: PropTypes.array,
    handleSwitch: PropTypes.func,
    index: PropTypes.number
  }

  render() {
    const {
      data,
      serviceList,
      handleSwitch,
      index
    } = this.props;
    const acitve = _.indexOf(serviceList, index) !== -1;

    return (
      <div className={`item clearfix text-left ${acitve ? 'item-active' : ''}`}>
        <span className="price num-font">{`¥ ${data.price}`}</span>
        <div className="item-title clearfix">
          <span>{data.title}</span>
          <span
            className="item-switch-btn pull-right"
            onClick={() => handleSwitch(index)}>
            <img
              src={acitve ? right_btn : no_btn}
              className={`${acitve ? 'right-btn' : 'no-btn'}`} />
          </span>
        </div>
        <div className="item-descriptions">{data.description}</div>
      </div>
    );
  }
}

export default IndividualItem;
