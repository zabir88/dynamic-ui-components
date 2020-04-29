import React, { Component } from 'react';
import {Alert} from '../lib';

class demoAlert extends Component { 
  state = {
    alert: {
      show: true,
      text: 'Thank You!',
      bStyle: 'success'
    },
  }

  render() {
    return (
      <div className='container' style={{paddingTop:'40px'}}>
        <h2>Flash Message</h2>
        <br/>
        <Alert bsStyle = {this.state.alert.bStyle} text = {this.state.alert.text} show = {this.state.alert.show} />
      </div>
    );
  }
}

export default demoAlert;