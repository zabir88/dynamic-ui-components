import React from 'react';
import Aux from './Aux';

var form = function form(props) {
  var formElementsArray = [];
  var inputElement = [];

  for (var key in props.formInputs) {
    formElementsArray.push(props.formInputs[key]);
  };

  if (props.sort) {
    formElementsArray.sort(function (a, b) {
      return a.order - b.order;
    });
  };

  formElementsArray.forEach(function (formElement) {
    switch (formElement.elementType) {
      case 'input':
        if (formElement.elementConfig.type === 'submit') {
          inputElement.push(React.createElement('input', formElement.elementConfig));
        } else if (formElement.elementConfig.type === 'checkbox') {
          inputElement.push(formElement.label === undefined ? null : React.createElement(
            'label',
            null,
            formElement.label
          ));
          inputElement.push(formElement.elementConfig.options.map(function (option, i) {
            return React.createElement(
              'div',
              { className: 'form-group', key: i },
              React.createElement(
                'div',
                { className: 'form-check' },
                React.createElement(
                  'label',
                  { className: 'form-check-label' },
                  React.createElement('input', Object.assign({}, formElement.elementConfig, { defaultChecked: option.defaultChecked, value: option.value, onChange: props.changed })),
                  option.displayValue
                )
              )
            );
          }));
        }
        // else if(formElement.elementConfig.type === 'radio') {
        //   inputElement.push(
        //     <div>
        //       <label>{formElement.elementConfig.label}</label>

        //       <label className="form-check-label">
        //         <input {...formElement.elementConfig} value={formElement.value} id={formElement.id} onChange={props.changed} /> 
        //         {formElement.elementConfig.displayValue}
        //       </label>
        //     </div>
        //   );
        // }
        else {
            inputElement.push(React.createElement(
              'div',
              { className: 'form-group' },
              formElement.label === undefined ? null : React.createElement(
                'label',
                null,
                formElement.label
              ),
              React.createElement('input', Object.assign({}, formElement.elementConfig, { onChange: props.changed })),
              formElement.errorMessage === undefined ? null : React.createElement(
                'div',
                { className: 'text-center text-danger' },
                formElement.errorMessage
              )
            ));
          }
        break;
      case 'textarea':
        inputElement.push(React.createElement(
          'div',
          { className: 'form-group' },
          formElement.label === undefined ? null : React.createElement(
            'label',
            null,
            formElement.label
          ),
          React.createElement('textarea', Object.assign({}, formElement.elementConfig, { onChange: props.changed })),
          formElement.errorMessage === undefined ? null : React.createElement(
            'div',
            { className: 'text-center text-danger' },
            formElement.errorMessage
          )
        ));
        break;
      case 'select':
        inputElement.push(React.createElement(
          'div',
          { className: 'form-group' },
          formElement.label === undefined ? null : React.createElement(
            'label',
            null,
            formElement.label
          ),
          React.createElement(
            'select',
            Object.assign({}, formElement.elementConfig, { onChange: props.changed }),
            formElement.options.map(function (option, i) {
              return React.createElement(
                'option',
                { key: i, value: option.value, disabled: option.disabled ? true : false },
                option.displayValue
              );
            })
          ),
          formElement.errorMessage === undefined ? null : React.createElement(
            'div',
            { className: 'text-center text-danger' },
            formElement.errorMessage
          )
        ));
        break;
      case 'button':
        inputElement.push(React.createElement(
          'button',
          Object.assign({}, formElement.elementConfig, { onClick: formElement.cancelHandler }),
          formElement.elementConfig.value
        ));
        break;
      default:
        inputElement.push(React.createElement('div', null));
        break;
    }
  });

  return React.createElement(
    'form',
    { style: props.formStyling, onSubmit: props.submit },
    inputElement.map(function (el, i) {
      return React.createElement(
        Aux,
        { key: i },
        el
      );
    })
  );
};

export default form;