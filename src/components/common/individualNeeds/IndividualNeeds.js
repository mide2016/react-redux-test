import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import config from 'components/common/config';
import IndividualItem from './IndividualItem';
import UrgentItem from './UrgentItem';

class IndividualNeeds extends Component {

  static PropTypes = {
    meal: PropTypes.number,
    urgent: PropTypes.number,
    serviceList:  PropTypes.array,
    switchFn: PropTypes.func,
    decFn: PropTypes.func,
    incFn: PropTypes.func,
  };

  static defaultProps = {
    meal: 0,
    urgent: 0,
    serviceList: []
  }

  render() {
    const {
      meal,
      urgent,
      serviceList,
      switchFn,
      decFn,
      incFn
    } = this.props;

    return (
      <section className="personality-requirement">
        <div className="content-section">
          <div className="title">个性需求</div>
          <div className="descriptions">加点料，让您的影片更加与众不同</div>
          <div className="body clearfix">
            {_.map(config.characters[meal], (data,i) => (<IndividualItem 
                key={i}
                data={data}
                serviceList={serviceList}
                handleSwitch={switchFn}
                index={+i}
              />)
              )}
              <UrgentItem 
                meal={meal}
                urgent={urgent}
                decFn={decFn}
                incFn={incFn}
              />
          </div>
        </div>
      </section>
    )
  }
}

export default IndividualNeeds;