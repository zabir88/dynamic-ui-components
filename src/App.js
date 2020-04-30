import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class App extends Component {

  render() {
    let display =  (
      <div className = "jumbotron">
        <h1 className = "display-3">Dynamic UI Components</h1>
        <p className = "lead">An open source rendering engine built on React.js and Bootstrap 4.</p>
        <hr className = "my-4"></hr>
        <p>It uses bootswatch and font awesome as dependencies. Click below links to check out the demo components.</p>
        <p className = "lead">
          <Link to={'/demo-alert'} className = "btn btn-info" style={{marginRight: '5px'}}>Flash Message</Link>
          <Link to={'/demo-breadcrumb'} className = "btn btn-info" style={{marginRight: '5px'}} >Breadcrumb</Link>
          <Link to={'/demo-form'} className = "btn btn-info" style={{marginRight: '5px'}} >Form</Link>
          <Link to={'/demo-spinner'} className = "btn btn-info" style={{marginRight: '5px'}} >Spinner</Link>
          <Link to={'/demo-table-and-pagination'} className = "btn btn-info" >Table</Link>
        </p>
      </div>
    );

    return display
  }
}

export default App;
