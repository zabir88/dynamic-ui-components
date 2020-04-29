import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import demoAlert from './demo/demoAlert';
import demoBreadcrumb from './demo/demoBreadcrumb';
import demoForm from './demo/demoForm';
import demoSpinner from './demo/demoSpinner';
import demoTableAndPagination from './demo/demoTableAndPagination';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Route, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' exact component={App} /> 
    <Route path='/demo-alert' exact component={demoAlert} /> 
    <Route path='/demo-breadcrumb' exact component={demoBreadcrumb} /> 
    <Route path='/demo-form' exact component={demoForm} /> 
    <Route path='/demo-spinner' exact component={demoSpinner} /> 
    <Route path='/demo-table-and-pagination' exact component={demoTableAndPagination} /> 
  </BrowserRouter>,
  document.getElementById('root'));

