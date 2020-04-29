import React, { Component } from 'react';
import {Spinner} from '../lib';

class demoSpinner extends Component { 
  render() {
    return (
      <div className='container' style={{paddingTop: '40px'}}>
        <h2>Spinner</h2>
        <Spinner type = {'spinner'} size = {4} />
      </div>
    );
  }
}

export default demoSpinner;