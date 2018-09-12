import React, { Component } from 'react';
import Form from './lib/Form';

class App extends Component {
  state = {
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

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Welcome to ZH-UI-Library</h1>
        </header>
        <Form formInputs={this.state.formInputs} changed={this.inputChangeHandler.bind(this)}/>
      </div>
    );
  }
}

export default App;
