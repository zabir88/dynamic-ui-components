# Dynamic-UI-Components
An open source library of Dynamic UI components created using `React.js` and `bootstrap 4`.

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
| changed       | function | Takes input event handler function to set/update form input values.                   |
| sort          | boolean  | Sorts the form inputs in a given order. Must provide order key in the each form input.|
| submit        | function | Takes submit handler function to submit the form.                                     |
| formStyling   | Object   | Style the form with paddings, margins, color, backgroudcolors etc.                    |

Use case example: 

Create this.state.formInputs in the structure shown below in your constructor() or componentDidMount() method. Keep the key of each field and their corresponding id to be the same. 
```
this.state = {
  formInputs: {
    firstName: {
      elementType: 'input',
      label: null,
      elementConfig: {
        type: 'text',
        value: '',
        placeholder: 'Name',
        id: 'firstName',
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
    }
  }
};

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
};

```
Call the component
```
<Form 
  formInputs = {this.state.formInputs} 
  changed = {this.inputChangeHandler.bind(this)} 
  sort = {true} 
  formStyling = {{topPadding: '20px'}} 
  submit = {this.submitDataHandler.bind(this))}
/>
```
## Alert
### Props
| Name          | Type                                                     | 
| --------------|----------------------------------------------------------|
| bsStyle       | one of: "success", "warning", "danger", "info", "primary"|
| dismiss       | function                                                 |

Use case example: 
```
state = {
  alert: {
    show: true
  }
};

alertDismissHandler = () => {
  this.setState({alert: {show: false}})
}
```
Call the component
```
render () {
  if (this.state.alert.show) {  
    return (
      <Alert bsStyle = {'success'} dismiss = {this.alertDismissHandler}>
        <p>Thank You!</p>
      </Alert>
    )
  };
}
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
| pageChange    | function | Takes page change event handler function to change page.      |
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
  pageChange ={this.pageChangedHandler}   
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
| Name        | Type     | Description                                                   |
| ------------|:--------:| --------------------------------------------------------------|
| data        | Number   | Describes the data presented. Please follow the example below.|
| border      | Boolean  | Adds border to the table if true. Default is false.           |
| headColor   | String   | Takes 'light' or 'dark' as string values. Default 'light'     |
| clickable   | Boolean  | Takes 'light' or 'dark' as string values. Default 'light'     |
| checkbox    | Boolean  | Takes 'light' or 'dark' as string values. Default 'light'     |
| selectAll   | Function | Takes 'light' or 'dark' as string values. Default 'light'     |
| goTo        | Function | Takes 'light' or 'dark' as string values. Default 'light'     |

Use case example:

Props data must be in the format shown below:
```
state = {
  tableData: {
    number: {
      displayHead: '#',
      displayBody: ['1', '2', '3', '4']
    }, 
    firstName: {
      displayHead: 'First Name',
      displayBody: ['Jon', 'Danery', 'Tyrion', 'Bran']
    }, 
    lastName: {
      displayHead: 'Last Name',
      displayBody: ['Snow', 'Targaryean', 'Lannister', 'Stark']
    }
  }
}

selectAllHandler = (event) => {
  let all = document.getElementsByClassName("check-input");
  for(let i = 0; i < all.length; i++) {
    if(event.target.checked) {
      all[i].checked = true;
    };
    if(!event.target.checked) {
      all[i].checked = false;
    };
  };
}

goToHandler = (event) => {
  // navigate to a different url;
  window.location = 'https://google.com';
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
  selectAll = {this.selectAllHandler.bind(this)}
  goTo = {this.goToHandler.bind(this)}
/>
```
## License
Dynamic-UI-Components is licensed under the terms of the MIT license.

