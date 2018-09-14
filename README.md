# ZH-UI-Library
A UI library of React components created using `create-react-app` and `bootstrap`.

## Dependecies 
Bootswatch (a variation of the bootsrap framework).

## Installation
Run the following command:
`npm install zh-ui-library --save`

## How to use
Import these files in the index.js file 
```
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import 'zh-ui-library/dist/<name of component you want to use>'
```
## List of UI Components currently available
### Dynamic Form
Takes the following props attributes: 
1. formInputs: takes an object. 
2. changed: takes input event handler function to set/update form input values. 
3. sort(boolean value accepted): true or false.
4. formStyling: takes style object.
5. submit: takes submit handler function to submit the data.

Use case example: 
```
<Form formInputs={this.state.formInputs} changed={this.inputChangeHandler.bind(this)} sort={true} formStyling={{topPadding: '20px'}} submit={this.submitDataHandler.bind(this))}/>
```

Currently the form supports dropdowns, date field, number field, text field, password field, email field, textareas and check-boxes.

#### Flash Message
Takes the following props attributes:
1. message: Displayed Message srting.
2. messageType: One of these strings 'success', 'warning', 'primary', 'danger', 'info', 'secondary' or 'light'.
3. dismiss: takes dismiss handler to set message and messageType to null in the state of the parent component.

Use case example: 
```
<FlashMessage message={this.state.flashMessage.message} messageType={this.state.flashMessage.messageType} dismiss={this.closeFlashHandler.bind(this)}/>
```

