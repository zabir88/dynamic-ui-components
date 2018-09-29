import React, { Component } from 'react';
import Form from './lib/Form';
import Alert from './lib/Alert';
import Pagination from './lib/Pagination';
import Breadcrumb from './lib/Breadcrumb';
import Spinner from './lib/Spinner';
import SortedTable from './lib/SortedTable';

class App extends Component {
  state = {
    data: {
      number: {
        displayHead: '#',
        displayBody: ['1', '2', '3', '4']
      }, 
      firstName: {
        displayHead: 'First Name',
        displayBody: ['zabir', 'sayeeda', 'jesmina', 'abul']
      }, 
      lastName: {
        displayHead: 'Last Name',
        displayBody: ['hossain', 'manzoor', 'islam', 'hossain']
      }
    },
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
    },
    pagination: {
      perPage: 5,
      total: 10,
      currentPage: 1,
      links: {
        1: { 
          id: 1,
          active: true
        },
        2: {
          id: 2,
          active: false
        },
        3: {
          id: 3,
          active: false
        },
        4: {
          id: 4,
          active: false
        }
      }
    },
    alert: {
      show: true 
    },
    formInputs: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          value: '',
          placeholder: 'Name',
          id: 'name',
          className: 'form-control'
        }
      },
      usCitizenship: {
        elementType: 'select',
        label: 'US Citizenship',
        elementConfig: {
          value: 'Please select one',
          id: 'usCitizenship',
          className: 'form-control' 
        },
        options: [
          {value: 'Please select one', displayValue: 'Please select one', disabled: true},
          {value: 'Yes', displayValue: 'Yes', disabled: false},
          {value: 'No', displayValue: 'No', disabled: false}
        ]
      },
      description: {
        elementType:'textarea',
        label: 'Description',
        elementConfig: {
          value: '',
          id:'description',
          placeholder: 'Please enter description...',
          className: 'form-control'
        }
      }
    } 
  }

  inputChangeHandler = (event) => {
    const updatedFormInputs = {...this.state.formInputs};
    updatedFormInputs[event.target.id].elementConfig.value = event.target.value
    this.setState({formInputs: updatedFormInputs});
  }

  pageChangedHandler = (event) => {
    const updatedPagination = {...this.state.pagination};
    const updatedPaginationValueArray = Object.keys(updatedPagination.links);
    let currentLinkId = this.state.pagination.currentPage;
    let nextPage = null;
    if (event.target.id === 'back') { 
      if (currentLinkId > 1) {
        nextPage = currentLinkId-1;
      };
    } 
    else if (event.target.id === 'next') {
      if (currentLinkId < updatedPaginationValueArray[updatedPaginationValueArray.length - 1]) {
        nextPage = currentLinkId+1;
      };
    }
    else {
      nextPage = Number(event.target.id);
    };
    updatedPagination.links[currentLinkId].active = false;
    updatedPagination.links[nextPage].active = true;
    updatedPagination.currentPage  = nextPage;
    this.setState({pagination: updatedPagination});
  }

  alertDismissHandler = () => {
    this.setState({alert: {show: false}})
  }

  render() {
    let alert = null;
    if (this.state.alert.show) {
      alert = (
        <Alert bsStyle={'success'} dismiss={this.alertDismissHandler}>
          <p>Thank You!</p>
        </Alert>
      );  
    };
    let display =  (
      <div className="container" style={{paddingTop: '50px'}}>
        <h1 className="text-center">Welcome to Dynamic-UI-Components</h1>
        <br/>
        <Breadcrumb links={this.state.breadcrumbLinks}/>
        {alert}
        <br/>
        <Form formInputs={this.state.formInputs} changed={this.inputChangeHandler.bind(this)} />
        <br/>
        <Pagination 
          links={this.state.pagination.links} 
          pageChange={this.pageChangedHandler} 
          position={'right'}  
          perPage={this.state.pagination.perPage} 
          currentPage= {this.state.pagination.currentPage} 
          total={this.state.pagination.total}
        /> 
        <br/>
        
        <Spinner size={4} />
        
        <br/>
        <SortedTable data={this.state.data} headColor={'primary'}/>   
      </div>
    );
    return display
  }
}

export default App;
