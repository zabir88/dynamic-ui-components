import React from 'react';
import Aux from './Aux';

var form = function form(props) {
  var formElementsArray = [];
  var inputElement = [];

  for (var key in props.formInputs) {
    formElementsArray.push({
      id: key,
      config: props.formInputs[key]
    });
  };

  if (props.sort) {
    formElementsArray.sort(function (a, b) {
      return a.config.order - b.config.order;
    });
  };

  formElementsArray.forEach(function (formElement) {
    switch (formElement.config.elementType) {
      case 'input':
        if (formElement.config.elementConfig.type === 'submit') {
          inputElement.push(React.createElement('input', Object.assign({}, formElement.config.elementConfig, { value: formElement.config.value })));
        } else if (formElement.config.elementConfig.type === 'checkbox') {
          inputElement.push(formElement.config.label === undefined ? null : React.createElement(
            'label',
            null,
            formElement.config.label
          ));
          inputElement.push(formElement.config.elementConfig.options.map(function (option, i) {
            return React.createElement(
              'div',
              { className: 'form-group', key: i },
              React.createElement(
                'div',
                { className: 'form-check' },
                React.createElement(
                  'label',
                  { className: 'form-check-label' },
                  React.createElement('input', Object.assign({}, formElement.config.elementConfig, { defaultChecked: option.defaultChecked, value: option.value, id: formElement.id, onChange: props.changed })),
                  option.displayValue
                )
              )
            );
          }));
        }
        // else if(formElement.config.elementConfig.type === 'radio') {
        //   inputElement.push(
        //     <div>
        //       <label>{formElement.config.elementConfig.label}</label>

        //       <label className="form-check-label">
        //         <input {...formElement.config.elementConfig} value={formElement.config.value} id={formElement.id} onChange={props.changed} /> 
        //         {formElement.config.elementConfig.displayValue}
        //       </label>
        //     </div>
        //   );
        // }
        else {
            inputElement.push(React.createElement(
              'div',
              { className: 'form-group ' + formElement.config.errorClass },
              formElement.config.label === undefined ? null : React.createElement(
                'label',
                null,
                formElement.config.label
              ),
              React.createElement('input', Object.assign({}, formElement.config.elementConfig, { value: formElement.config.value, id: formElement.id, onChange: props.changed })),
              formElement.config.errorMessage === null ? null : React.createElement(
                'div',
                { className: 'text-center text-danger' },
                formElement.config.errorMessage
              )
            ));
          }
        break;
      case 'textarea':
        inputElement.push(React.createElement(
          'div',
          { className: 'form-group' },
          formElement.config.label === undefined ? null : React.createElement(
            'label',
            null,
            formElement.config.label
          ),
          React.createElement('textarea', Object.assign({}, formElement.config.elementConfig, { id: formElement.key, value: formElement.config.value, onChange: props.changed })),
          formElement.config.errorMessage === null ? null : React.createElement(
            'div',
            { className: 'text-center text-danger' },
            formElement.config.errorMessage
          )
        ));
        break;
      case 'select':
        inputElement.push(React.createElement(
          'div',
          { className: 'form-group' },
          formElement.config.label === undefined ? null : React.createElement(
            'label',
            null,
            formElement.config.label
          ),
          React.createElement(
            'select',
            { className: formElement.config.elementConfig.className, id: formElement.id, value: formElement.config.value, onChange: props.changed },
            formElement.config.elementConfig.options.map(function (option, i) {
              return React.createElement(
                'option',
                { key: i, value: option.value, disabled: option.disabled ? true : false },
                option.displayValue
              );
            })
          ),
          formElement.config.errorMessage === null ? null : React.createElement(
            'div',
            { className: 'text-center text-danger' },
            formElement.config.errorMessage
          )
        ));
        break;
      case 'button':
        inputElement.push(React.createElement(
          'button',
          Object.assign({}, formElement.config.elementConfig, { onClick: formElement.config.cancelHandler }),
          formElement.config.value
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