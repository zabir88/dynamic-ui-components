import React from 'react';

const spinner = (props) => {
  let size = null;
  let type = null;
  if(props.size === undefined || props.size === null) {
    size = 3;
  } else { 
    size = props.size; 
  };

  if(props.type === undefined) {
    type = 'spinner'
  } else {
    type = props.type;
  }

  return (
    <div className = 'text-center'>
      <i className = {`fa fa-${type} fa-spin fa-${size}x fa-fw`}></i>
    </div>
  )
}

export default spinner;