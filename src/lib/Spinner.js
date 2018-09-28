import React from 'react';

const spinner = (props) => {
	let size = null;
	if(props.size === undefined || props.size === null) {
		size = 3;
	}
	else {
		size = props.size;
	}
	return (
		<div className='text-center'>
  		<i className={`fa fa-spinner fa-pulse fa-${size}x fa-fw`}></i>
		</div>
	)
}

export default spinner;