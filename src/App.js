import React, { Component } from 'react';
import Form from './lib/Form';
import Alert from './lib/Alert';
import Pagination from './lib/Pagination';
import Breadcrumb from './lib/Breadcrumb';
import Spinner from './lib/Spinner';
import Table from './lib/Table';

class App extends Component {
  state = {
    tableData: {
      head: ['Company', 'Founded'],
      body: [ 
        {value: ['Google LLC', '1998'], route: 'https://en.wikipedia.org/wiki/Google'},
        {value: ['Amazon Inc','1994'], route: 'https://en.wikipedia.org/wiki/Amazon_(company)'},
        {value: ['Facebook Inc', '2004'], route: 'https://en.wikipedia.org/wiki/Facebook'},
        {value: ['Microsoft Corporation', '1975'], route: 'https://en.wikipedia.org/wiki/Microsoft'}
      ]     
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
        label: null,
        elementConfig: {
          type: 'text',
          value: '',
          placeholder: 'Name',
          id: 'name',
          className: 'form-control'
        }
      },
      checkboxes: {
        elementType: 'input',
        label: 'Checkboxes',
        elementConfig: {
          type: 'checkbox',
          className: 'form-check-input',
          id: 'checkboxes',
          value: {}
        },
        options: [
          {value: 'option one', displayValue: 'Option One', defaultChecked: false},
          {value: 'option two', displayValue: 'Option Two', defaultChecked: false},
          {value: 'option three', displayValue: 'Option Three', defaultChecked: false}
        ]
      },
      dropdown: {
        elementType: 'select',
        label: 'Dropdown',
        elementConfig: {
          value: 'Please select one',
          id: 'dropdown',
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
      },
      submit: {
        elementType: 'input',
        elementConfig: {
          type: 'submit',
          value: 'Submit',
          className: 'btn btn-info'
        }
      },
      cancel: {
        elementType: 'button',
        elementConfig: {
          value: 'Cancel',
          className: 'btn btn-primary',
          style: {marginLeft: '5px'}
        },
        cancelHandler: (event) => {
          event.preventDefault();
          // this.props.history.goBack();
        }
      }
    } 
  }

  inputChangedHandler = (event) => {
    const updatedFormInputs = {...this.state.formInputs};
    if(event.target.type === 'checkbox') {
      if(event.target.checked === true) {
        updatedFormInputs[event.target.parentNode.id].elementConfig.value[event.target.id] = event.target.value;  
      } else {
        delete updatedFormInputs[event.target.parentNode.id].elementConfig.value[event.target.id]
      };
    } else {
      updatedFormInputs[event.target.id].elementConfig.value = event.target.value
    };
    this.setState({formInputs: updatedFormInputs});
  }

  submitDataHandler = (event) => {
    event.preventDefault();
    // Form validation goes here
    // clear form validation errors 
    // make api call to post form
    // render flash message 
  }

  goToHandler = (param, event) => {
    // navigate to a different url;
    window.location = String(param);
  }

  selectAllRowHandler = (event) => {
    console.log(event.target.value);
  }

  selectEachRowHandler = (event) => {
    console.log(event.target.value);
  }

  pageChangeHandler = (event) => {
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
    // make the api call {
      updatedPagination.links[currentLinkId].active = false;
      updatedPagination.links[nextPage].active = true;
      updatedPagination.currentPage  = nextPage;
      this.setState({pagination: updatedPagination});
    //}
  }

  render() {
    let display =  (
      <div className = "container" style = {{paddingTop: '50px'}}>
        <h1>Dynamic-UI-Components</h1>
        <br/>
        <h3>Breadcrumb</h3>
        <Breadcrumb links = {this.state.breadcrumbLinks}/>
        <br/>
        <h3>Flash Message</h3>
        <Alert bsStyle = {'success'} text = {'Thank You!'} show = {this.state.alert.show} />
        <br/>
        <h3>Form</h3>
        <Form 
          formInputs = {this.state.formInputs} 
          changed = {this.inputChangedHandler.bind(this)} 
          submit = {this.submitDataHandler.bind(this)}
        />
        <br/>
        <h3>Spinner</h3>
        <Spinner type = {'spinner'} size = {4} />
        <br/>
        <h3>Table</h3>
        <Table 
          data = {this.state.tableData} 
          clickable = {true} 
          checkbox = {true} 
          border = {false} 
          headColor = {'dark'}
          selectAllRow = {this.selectAllRowHandler.bind(this)}
          selectEachRow = {this.selectEachRowHandler.bind(this)}
          goTo = {this.goToHandler.bind(this)}
         /> 
        <br/>
        <h3>Pagination</h3>
        <Pagination 
          links = {this.state.pagination.links} 
          pageChange = {this.pageChangeHandler.bind(this)} 
          position = {'right'}  
          perPage = {this.state.pagination.perPage} 
          currentPage = {this.state.pagination.currentPage} 
          total = {this.state.pagination.total}
        /> 
        <br/>  
      </div>
    );
    return display
  }
}

export default App;
