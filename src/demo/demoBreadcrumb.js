import React, { Component } from 'react';
import {Breadcrumb} from '../lib';

class demoBreadcrumb extends Component { 
  state = {
    breadcrumbLinks: {
      1: {
        route: '#',
        displayValue: 'Home'
      },
      2: {
        route: '#',
        displayValue: 'Library'
      },
      3: {
        route: '#',
        displayValue: 'Data'
      }
    }
  }

  render() {
    return (
      <div className='container' style={{paddingTop: '40px'}}>
        <h2>Breadcrumb Component</h2>
        <br/>
        <Breadcrumb links = {this.state.breadcrumbLinks}/>
      </div>
    );
  }
}

export default demoBreadcrumb;