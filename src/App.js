import React, { Component } from 'react';
import Form from './lib/Form';
import FlashMessage from './lib/FlashMessage';
import Pagination from './lib/Pagination';

class App extends Component {
  state = {
    flashMessage: {
      message: 'Thank You!',
      messageType: 'success',  
    },
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

  closeFlashHandler = () => {
    const updatedFlashMessage = {...this.state.flashMessage};
    updatedFlashMessage.message = null;
    updatedFlashMessage.messageType = null;
    this.setState({flashMessage: updatedFlashMessage});
  }

  pageChangedHandler = (event) => {
    const updatedPagination = {...this.state.links};
    let currentLinkId = null;
    const lastElement = Object.keys(updatedPagination);
    for (let key in updatedPagination) {
      if (updatedPagination[key].active === true) {
        currentLinkId = updatedPagination[key].id;
      };
    };
    if (Number(event.target.id) === 0) { 
      if (currentLinkId > 1) {
        updatedPagination[currentLinkId].active = false;
        updatedPagination[currentLinkId-1].active = true;
      };
    } 
    else if (Number(event.target.id) === lastElement.length + 1) {
      if (currentLinkId < lastElement[lastElement.length - 1]) {
        updatedPagination[currentLinkId].active = false;
        updatedPagination[currentLinkId+1].active = true;
      };
    }
    else {
      updatedPagination[currentLinkId].active = false;
      updatedPagination[Number(event.target.id)].active = true;
    };
    this.setState({links: updatedPagination});
  }

  render() {
    let display =  (
      <div className="container" style={{paddingTop: '50px'}}>
        <h1 className="text-center">Welcome to ZH-UI-Library</h1>
        <br/>
        <FlashMessage message={this.state.flashMessage.message} messageType={this.state.flashMessage.messageType} dismiss={this.closeFlashHandler.bind(this)} />
        <br/>
        <Form formInputs={this.state.formInputs} changed={this.inputChangeHandler.bind(this)} />
        <br/>
        <Pagination links={this.state.links} changePage={this.pageChangedHandler} />        
      </div>
    );
    return display
  }
}

export default App;
