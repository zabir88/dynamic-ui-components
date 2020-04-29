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

  inputChangedHandlerFormOne = (event) => {
    const updatedFormInputsOne = {...this.state.formInputs};
    if(event.target.type === 'checkbox') {
      if(event.target.checked) {
        updatedFormInputsOne[event.target.parentNode.id].options[event.target.id].checked = true;
      } 
      else {
        updatedFormInputsOne[event.target.parentNode.id].options[event.target.id].checked = false;
      };
      if(event.target.checked === true) {
        updatedFormInputsOne[event.target.parentNode.id].elementConfig.value[event.target.id] = event.target.value;  
      } else {
        delete updatedFormInputsOne[event.target.parentNode.id].elementConfig.value[event.target.id]
      };
      if(updatedFormInputsOne[event.target.parentNode.id].errorMessage !== null) {
        updatedFormInputsOne[event.target.parentNode.id].errorMessage = null;
      };
    } 
    else {
      updatedFormInputsOne[event.target.id].elementConfig.value = event.target.value;
      if(updatedFormInputsOne[event.target.id].errorMessage !== null) {
        updatedFormInputsOne[event.target.id].errorMessage = null;
        updatedFormInputsOne[event.target.id].elementConfig.className = 'form-control';
      };
    };
    this.setState({formInputs: updatedFormInputsOne});
  }

  submitDataHandlerFormOne = (event) => {
    event.preventDefault();
    const updatedFormInputsOne = {...this.state.formInputs};
    // Form validation goes here
    // Example validation for input fields
    if(updatedFormInputsOne['name'].elementConfig.value === '') {
      updatedFormInputsOne['name'].elementConfig.className = 'form-control is-invalid';
      updatedFormInputsOne['name'].errorMessage= "can't be blank";
    };
    // Example validation for test area fields
    if(updatedFormInputsOne['description'].elementConfig.value === '') {
      updatedFormInputsOne['description'].elementConfig.className = 'form-control is-invalid';
      updatedFormInputsOne['description'].errorMessage= "can't be blank";
    };
    // Example validation for chekbox fields
    if(Object.keys(updatedFormInputsOne['checkboxes'].elementConfig.value).length === 0) {
      updatedFormInputsOne['checkboxes'].errorMessage = "can't be blank";
    };
    // Example validation for dropdown fields
    if(updatedFormInputsOne['dropdown'].elementConfig.value === 'Please select one') {
      updatedFormInputsOne['dropdown'].elementConfig.className = 'form-control is-invalid';
      updatedFormInputsOne['dropdown'].errorMessage = "can't be blank";
    };
    //----------- Form validation must precede api call to form submission.-----------
    // Make api call to form submission
    // Clear form values after form submission
    updatedFormInputsOne['name'].elementConfig.value = '';
    updatedFormInputsOne['description'].elementConfig.value = '';
    updatedFormInputsOne['dropdown'].elementConfig.value = 'Please select one';
    updatedFormInputsOne['checkboxes'].elementConfig.value = {};
    for(let i in updatedFormInputsOne['checkboxes'].options) {
      updatedFormInputsOne['checkboxes'].options[i].checked = false;
    };
    // render flash message
    this.setState({formInputs:updatedFormInputsOne}) 
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