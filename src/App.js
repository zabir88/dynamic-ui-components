import React, { Component } from 'react';
import Form from './lib/Form';
import Alert from './lib/Alert';
import Pagination from './lib/Pagination';
import Breadcrumb from './lib/Breadcrumb';

class App extends Component {
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
    },
    pagination: {
      perPageData: 5,
      totalData: 10,
      currentPageData: 5,
      size: 'medium',
      links: {
        1: { 
          route: '#',
          displayValue: '1',
          id: 1,
          active: true
        },
        2: {
          route: '#',
          displayValue: '2',
          id: 2,
          active: false
        },
        3: {
          route: '#',
          displayValue: '3',
          id: 3,
          active: false
        },
        4: {
          route: '#',
          displayValue: '4',
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

  // componentDidMount() {
  //   let moreLinks = {...this.state.links};
  //   for( let i = 5; i<101; i++) {
  //     moreLinks[i] = {
  //       route: '#',
  //       displayValue: `${i}`,
  //       id: i,
  //       active: false
  //     }
  //   };
  //   this.setState({links: moreLinks});
  // }

  inputChangeHandler = (event) => {
    const updatedFormInputs = {...this.state.formInputs};
    updatedFormInputs[event.target.id].elementConfig.value = event.target.value
    this.setState({formInputs: updatedFormInputs});
  }

  pageChangedHandler = (event) => {
    const updatedPagination = {...this.state.pagination};
    let currentLinkId = null;

    const updatedPaginationValueArray = Object.keys(updatedPagination.links);
    for (let key in updatedPagination.links) {
      if (updatedPagination.links[key].active === true) {
        currentLinkId = updatedPagination.links[key].id;
      };
    };
    if (event.target.id === 'back') { 
      if (currentLinkId > 1) {
        updatedPagination.links[currentLinkId].active = false;
        updatedPagination.links[currentLinkId-1].active = true;
      };
    } 
    else if (event.target.id === 'next') {
      if (currentLinkId < updatedPaginationValueArray[updatedPaginationValueArray.length - 1]) {
        updatedPagination.links[currentLinkId].active = false;
        updatedPagination.links[currentLinkId+1].active = true;
      };
    }
    else {
      updatedPagination.links[currentLinkId].active = false;
      updatedPagination.links[Number(event.target.id)].active = true;
    };
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
        <h1 className="text-center">Welcome to ZH-UI-Library</h1>
        <br/>
        <Breadcrumb links={this.state.breadcrumbLinks}/>
        {alert}
        <br/>
        <Form formInputs={this.state.formInputs} changed={this.inputChangeHandler.bind(this)} />
        <br/>
        <Pagination links={this.state.pagination.links} pageChange={this.pageChangedHandler} position={'right'}  perPage={this.state.pagination.perPageData} currentPage= {this.state.pagination.currentPageData} total={this.state.pagination.totalData}/>        
      </div>
    );
    return display
  }
}

export default App;
