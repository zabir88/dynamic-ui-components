import React from 'react';
import Aux from './Aux';

const form = (props) => { 
  const formElementsArray = [];
  let inputElement = [];

  for (let key in props.formInputs) {
    formElementsArray.push({
      id: key,
      config: props.formInputs[key]
    })
  };

  if(props.sort) {
    formElementsArray.sort((a,b) => a.config.order - b.config.order);
  };

  formElementsArray.forEach(formElement => {
    switch (formElement.config.elementType) {
      case('input'):
        if(formElement.config.elementConfig.type === 'submit') {
          inputElement.push(
            <input {...formElement.config.elementConfig} value={formElement.config.value} /> 
          );
        }
        else if(formElement.config.elementConfig.type === 'checkbox') {
          inputElement.push(formElement.config.label === undefined ? null : <label>{formElement.config.label}</label>);
          inputElement.push(
            formElement.config.elementConfig.options.map((option, i) => {
              return (
                <div className= 'form-group' key={i}>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input {...formElement.config.elementConfig} defaultChecked={option.defaultChecked} value={option.value} id={formElement.id} onChange={props.changed} /> 
                      {option.displayValue}
                    </label>
                  </div>
                </div>
              )
            })   
          );
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
          inputElement.push(
            <div className={`form-group ${formElement.config.errorClass}`}>
              { formElement.config.label === undefined ? null : <label>{formElement.config.label}</label> }
              <input {...formElement.config.elementConfig} value={formElement.config.value} id={formElement.id} onChange={props.changed} />
              {formElement.config.errorMessage === null ? null : <div className='text-center text-danger'>{formElement.config.errorMessage}</div>}
            </div> 
          );
        }
        break;
      case('textarea') : 
        inputElement.push(
          <div className='form-group'>
            { formElement.config.label === undefined ? null : <label>{formElement.config.label}</label> }
            <textarea {...formElement.config.elementConfig} id={formElement.key} value={formElement.config.value} onChange={props.changed} />
            {formElement.config.errorMessage === null ? null : <div className='text-center text-danger'>{formElement.config.errorMessage}</div>}
          </div>
        );
        break;
      case ('select'): 
        inputElement.push(
          <div className='form-group'>
            { formElement.config.label === undefined ? null : <label>{formElement.config.label}</label> }
            <select className={formElement.config.elementConfig.className} id={formElement.id} value={formElement.config.value} onChange={props.changed}>
              { formElement.config.elementConfig.options.map((option, i) => (                
                <option key={i} value={option.value} disabled={option.disabled ? true : false}>
                  {option.displayValue}
                </option>))
              }
            </select>
            {formElement.config.errorMessage === null ? null : <div className='text-center text-danger'>{formElement.config.errorMessage}</div>}
          </div>
        );
        break;
      case ('button'):
        inputElement.push(
          <button {...formElement.config.elementConfig} onClick={formElement.config.cancelHandler}>{formElement.config.value}</button>
        )
        break;
      default :
        inputElement.push(<div />);
        break;
    }
  });

  return (
    <form style={props.formStyling} onSubmit={props.submit} >
      { inputElement.map((el, i) => (
          <Aux key={i}>
            {el}
          </Aux>
        ))
      }
    </form>
  )
}

export default form;