import React from 'react';

const spinner = (props) => {
	return (
		<div className='pull-left'>
  		<i className={`fa fa-spinner fa-spin fa-${props.size}x`}></i>
			<div>Loading...</div>			
		</div>	
	)
}

export default spinner;