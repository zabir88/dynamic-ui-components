import React, { Component } from 'react';
import {Form} from '../lib';

class demoForm extends Component { 
  state = {
    formInputs: {
      name: {
        elementType: 'input',
        label: null,
        errorMessage: null,
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
        errorMessage: null,
        elementConfig: {
          type: 'checkbox',
          className: 'form-check-input',
          id: 'checkboxes',
          value: {}
        },
        options: [
          {value: 'option one', displayValue: 'Option One', checked: false},
          {value: 'option two', displayValue: 'Option Two', checked: false},
          {value: 'option three', displayValue: 'Option Three', checked: false}
        ]
      },
      dropdown: {
        elementType: 'select',
        label: 'Dropdown',
        errorMessage: null,
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
        errorMessage: null,
        elementConfig: {
          value: '',
          id:'description',
          placeholder: 'Please enter description...',
          rows: 8,
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
          this.props.history.push('/');
        }
      }
    }
  }

  componentDidMount() {
    const updatedFormInputs = {...this.state.formInputs};
    for (let i in updatedFormInputs['checkboxes'].options) {
      if(updatedFormInputs['checkboxes'].options[i].value === 'option three') {
        updatedFormInputs['checkboxes'].options[i].checked = true;
      };
    };
    this.setState({formInputs:updatedFormInputs});
  }

  inputChangedHandlerFormOne = (event) => {
    const updatedFormInputs = {...this.state.formInputs};
    if(event.target.type === 'checkbox') {
      if(event.target.checked) {
        updatedFormInputs[event.target.parentNode.id].options[event.target.id].checked = true;
      } 
      else {
        updatedFormInputs[event.target.parentNode.id].options[event.target.id].checked = false;
      };
      if(event.target.checked === true) {
        updatedFormInputs[event.target.parentNode.id].elementConfig.value[event.target.id] = event.target.value;  
      } else {
        delete updatedFormInputs[event.target.parentNode.id].elementConfig.value[event.target.id]
      };
      if(updatedFormInputs[event.target.parentNode.id].errorMessage !== null) {
        updatedFormInputs[event.target.parentNode.id].errorMessage = null;
      };
    } 
    else {
      updatedFormInputs[event.target.id].elementConfig.value = event.target.value;
      if(updatedFormInputs[event.target.id].errorMessage !== null) {
        updatedFormInputs[event.target.id].errorMessage = null;
        updatedFormInputs[event.target.id].elementConfig.className = 'form-control';
      };
    };
    this.setState({formInputs: updatedFormInputs});
  }

  submitDataHandlerFormOne = (event) => {
    event.preventDefault();
    const updatedFormInputs = {...this.state.formInputs};
    // Form validation goes here
    // Example validation for input fields
    if(updatedFormInputs['name'].elementConfig.value === '') {
      updatedFormInputs['name'].elementConfig.className = 'form-control is-invalid';
      updatedFormInputs['name'].errorMessage= "can't be blank";
    };
    // Example validation for test area fields
    if(updatedFormInputs['description'].elementConfig.value === '') {
      updatedFormInputs['description'].elementConfig.className = 'form-control is-invalid';
      updatedFormInputs['description'].errorMessage= "can't be blank";
    };
    // Example validation for chekbox fields
    if(Object.keys(updatedFormInputs['checkboxes'].elementConfig.value).length === 0) {
      updatedFormInputs['checkboxes'].errorMessage = "can't be blank";
    };
    // Example validation for dropdown fields
    if(updatedFormInputs['dropdown'].elementConfig.value === 'Please select one') {
      updatedFormInputs['dropdown'].elementConfig.className = 'form-control is-invalid';
      updatedFormInputs['dropdown'].errorMessage = "can't be blank";
    };
    //----------- Form validation must precede api call to form submission.-----------
    // Make api call to form submission
    // Clear form values after form submission
    updatedFormInputs['name'].elementConfig.value = '';
    updatedFormInputs['description'].elementConfig.value = '';
    updatedFormInputs['dropdown'].elementConfig.value = 'Please select one';
    updatedFormInputs['checkboxes'].elementConfig.value = {};
    for(let i in updatedFormInputs['checkboxes'].options) {
      updatedFormInputs['checkboxes'].options[i].checked = false;
    };
    // render flash message
    this.setState({formInputs:updatedFormInputs}) 
  }
  
  render() {
    
    return (
      <div className='container' style={{paddingTop: '40px'}}>
        <h2>Form Component</h2>
        <br/>
        <Form 
          formInputs = {this.state.formInputs} 
          changed = {this.inputChangedHandlerFormOne.bind(this)} 
          submit = {this.submitDataHandlerFormOne.bind(this)}
        />
      </div>
    );
  }
}

export default demoForm;