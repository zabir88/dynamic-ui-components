# Dynamic-UI-Components
An open source rendering engine built on `React.js` and `bootstrap 4`.

## Installation
Run the following command:
`npm install dynamic-ui-components --save`

## Dependecies 
* Bootswatch (a variation of the bootstrap framework). For more info please visit [https://bootswatch.com](https://www.bootswatch.com)
* Font Awesome

## How to use
Import these files in your react app top level file(typically index.js) file 
```
import 'bootswatch/dist/<theme of your choice>/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'dynamic-ui-components/dist/<name of component you want to use>';
```
## List of UI Components currently available
## Dynamic Form
Currently the form supports the following: 
1. dropdowns
2. date field
3. number field
4. text field
5. password field
6. email field 
7. textareas
8. checkboxes

### Props
| Name          | Type     | Description                                                                           |
| ------------- |:--------:| --------------------------------------------------------------------------------------|
| formInputs    | Object   | Describes the inputs of the form.Please check the example below.                      |
| sort          | Boolean  | Sorts the form inputs in a given order. Must provide order key in the each form input.|
| submit        | Function | Takes submit handler function to submit the form.                                     |
| changed       | Function | Takes input event handler function to set/update form input values.                   |
| formStyling   | Object   | Style the form with paddings, margins, color, backgroudcolors etc.                    |

Use case example: 

Create this.state.formInputs in the structure shown below in your constructor() or componentDidMount() method. Keep the key of each field and their corresponding id to be the same. 
```
this.state = {
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
};

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
```
Call the component
```
<Form 
  formInputs = {this.state.formInputs} 
  changed = {this.inputChangeHandler.bind(this)} 
  sort = {true} 
  formStyling = {{topPadding: '20px'}} 
  submit = {this.submitDataHandler.bind(this)}
/>
```
## Alert
### Props
| Name          | Type                                                     | Description                               |  
| --------------|:--------------------------------------------------------:|-------------------------------------------|
| bsStyle       | one of: "success", "warning", "danger", "info", "primary"|                                           |
| text          | String                                                   | Describes the text that will be displayed.|
| show          | Boolean                                                  | True will display the flash message.      |

Use case example: 
```
state = {
  alert: {
    show: true
  }
};

```
Call the component
```
<Alert bsStyle = {'success'} text = {'Thank You!'} show = {this.state.alert.show} />

```
## Breadcrumb
### Props
| Name          | Type         | Description                                                     | 
| ------------- |:------------:|-----------------------------------------------------------------|
| links         | Object       | Provides the links and display value of each breadcrumb element.|

Use case example: 
```
state = {
  breadcrumbLinks: {
    1: {
      route: 'route of your choice',
      displayValue: 'Home'
    },
    2: {
      route: 'route of your choice',
      displayValue: 'Library'
    },
    3: {
      route: 'route of your choice',
      displayValue: 'Data'
    }
  }
}
```
Call the component

```
<Breadcrumb links = {this.state.breadcrumbLinks}/>
```
## Pagination
### Props
| Name          | Type     | Description                                                   |
| ------------- |:--------:| --------------------------------------------------------------|
| links         | Object   | Describes the pagination links.Please check the example below.|
| pageChange    | Function | Takes page change event handler function to change page.      |
| perPage       | Number   | takes integer value to display count per page.                |
| currentPage   | Number   | Current page.                                                 |
| total         | Number   | takes total value to display total count.                     |

Use case example:
```
state = {
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
  }
};

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
  // this is wehre you make the api call to update the data;
  updatedPagination.links[currentLinkId].active = false;
  updatedPagination.links[nextPage].active = true;
  updatedPagination.currentPage  = nextPage;
  this.setState({pagination: updatedPagination});
}
```
Call the component
```
<Pagination 
  links = {this.state.pagination.links} 
  pageChange ={this.pageChangedHandler.bind(this)}   
  perPage = {this.state.pagination.perPage} 
  currentPage = {this.state.pagination.currentPage} 
  total = {this.state.pagination.total}
  position = {'right'}
/>
```

## Spinner
### Props
| Name          | Type     | Description                                                       |
| ------------- |:--------:| ------------------------------------------------------------------|
| size          | Integer  | Dictates the size of the spinner. Number from 1 to 5.             |
| type          | String   | one of: "spinner", "refresh", "gear", "cog". Default is 'spinner'.|

Call the component
```
<Spinner type = {'spinner'} size = {<any integer from 1 to 5>}/>
```

## Table
### Props
| Name        | Type     | Description                                                            |
| ------------|:--------:| -----------------------------------------------------------------------|
| data        | Object   | Describes the data presented. Please follow the example below.         |
| border      | Boolean  | Adds border to the table if true. Default is false.                    |
| headColor   | String   | Takes 'light' or 'dark' as string values. Default 'light'              |
| clickable   | Boolean  | If true then pass goTo props to navigate.                              |
| checkbox    | Boolean  | If true then it adds an additional column of checkboxes.               |
| goTo        | Function | Navigates to a given route when a row in the table is clicked.         |
| selectAllRow| Function | Returns all input value attribute of each row.                         |
 selectEachRow| Function | Returns selected input value attribute .                               |

Use case example:

Props data must be in the format shown below:
```
state = {
  tableData: {
    head: ['Company', 'Founded'],
    body: [ 
      {value: ['Google LLC', '1998'], route: 'https://en.wikipedia.org/wiki/Google'},
      {value: ['Amazon Inc','1994'], route: 'https://en.wikipedia.org/wiki/Amazon_(company)'},
      {value: ['Facebook Inc', '2004'], route: 'https://en.wikipedia.org/wiki/Facebook'},
      {value: ['Microsoft Corporation', '1975'], route: 'https://en.wikipedia.org/wiki/Microsoft'}
    ]     
  }
}

goToHandler = (param, event) => {
  // navigate to the given route;
  window.location = String(param);
}

selectAllRowHandler = (event) => {
  console.log(event.target.value);
}

selectEachRowHandler = (event) => {
  console.log(event.target.value);
}
```
Call the component
```
<Table 
  data = {this.state.tableData} 
  clickable = {true} 
  checkbox = {true} 
  border = {false} 
  headColor = {'dark'}
  goTo = {this.goToHandler.bind(this)}
  selectAllRow = {this.selectAllRowHandler.bind(this)}
  selectEachRow = {this.selectEachRowHandler.bind(this)}
/>
```
## License
Dynamic-UI-Components is licensed under the terms of the MIT license.

