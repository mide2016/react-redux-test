import React, { Component } from 'react';
import Introducer from './Introducer';
import First from './First';
import Second from './Second';
import Third from './Third';
 

class Step extends Component {
  render() {
    return(
      <div>
        <Introducer />
        <First />
        <Second />
        <Third />
      </div>
    )
  }
}

export default Step;