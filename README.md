# Dynamic-UI-Components
A library of Dynamic UI components created using `react.js` and `bootstrap 4`.

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
Currently the form supports dropdowns, date field, number field, text field, password field, email field, textareas and check-boxes.

### Props
| Name          | Type     | Description                                                                           |
| ------------- |:--------:| --------------------------------------------------------------------------------------|
| formInputs    | Object   | Describes the inputs of the form.Please check the example below.                      |
| changed       | function | Takes input event handler function to set/update form input values.                   |
| sort          | boolean  | Sorts the form inputs in a given order. Must provide order key in the each form input.|
| submit        | function | Takes submit handler function to submit the form.                                     |
| formStyling   | Object   | Style the form with paddings, margins, color, backgroudcolors etc.                    |

Use case example: 
```
this.state = {
	formInputs: {
		name: {
			elementType: 'input',
			order: 1,
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
      order: 2,
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
      order: 3,
		  elementConfig: {
		    value: '',
		    id:'description',
		    placeholder: 'Please enter description...',
		    className: 'form-control'
		  }
		}
	};
};
```
Finally call the component
```
<Form 
  formInputs={this.state.formInputs} 
  changed={this.inputChangeHandler.bind(this)} 
  sort={true} 
  formStyling={{topPadding: '20px'}} 
  submit={this.submitDataHandler.bind(this))}
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
Finally call the component
```
render () {
  if (this.state.alert.show) {  
    return (
      <Alert bsStyle={'success'} dismiss={this.alertDismissHandler}>
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
<Breadcrumb links={this.state.breadcrumbLinks}/>
```
## Pagination
### Props
| Name          | Type     | Description                                                         |
| ------------- |:--------:| --------------------------------------------------------------------|
| links         | Object   | Describes the pagination links.Please check the example below.      |
| pageChange    | function | Takes page change event handler function to change page.            |
| perPage       | Number   | takes integer value to display count per page.                      |
| currentPage   | Number   | Current page.                                                       |
| total         | Number   | takes total value to display total count.                           |

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
  updatedPagination.links[currentLinkId].active = false;
  updatedPagination.links[nextPage].active = true;
  updatedPagination.currentPage  = nextPage;
  this.setState({pagination: updatedPagination});
}
```
Finally call the component
```
<Pagination 
  links={this.state.pagination.links} 
  pageChange={this.pageChangedHandler}   
  perPage={this.state.pagination.perPage} 
  currentPage= {this.state.pagination.currentPage} 
  total={this.state.pagination.total}
  position={'right'}
/>
```

## Spinner
### Props
| Name          | Type     | Description                                           |
| ------------- |:--------:| ------------------------------------------------------|
| size          | Number   | Dictates the size of the spinner. Number from 1 to 5. |

Call the component
```
<Spinner size={<any integer from 1 to 5>}/>
```

## License
Dynamic-UI-Components is licensed under the terms of the MIT license.

