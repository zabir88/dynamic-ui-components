# zh-ui-library
A UI library of React components created using `create-react-app`.

## List of UI Components currently available
1. Dynamic Form

## Installation
Run the following command:
`npm install zh-ui-library --save`

## How to use
###### Dynamic Form
Pass form input object in the component state. Props attributes are: 
1. formInputs: takes an object. 
2. changed: takes input event handler. 
3. sort(boolean value accepted): true or false.
4. formStyling: takes style object.
5. submit: takes submit handler.

Currently the form supports dropdowns, date field, number field, text field, text areas and check boxes.