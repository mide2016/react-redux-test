import React, { Component } from 'react';
import { connect } from 'react-redux';
//调用其他小组件
import  Navigation from 'components/common/public/Navigation';
import Step from 'components/common/contents/Step';
import IndividualNeeds from 'components/common/individualNeeds/IndividualNeeds';
import Information from 'components/common/other/Information';
import Total from 'components/common/other/Total';

class PublishRequirements extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Step />
        <IndividualNeeds />
        <Information />
        <Total />
      </div>
    )
  }
}

export default PublishRequirements;