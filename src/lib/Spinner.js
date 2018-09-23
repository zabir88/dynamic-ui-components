import React from 'react';

const spinner = (props) => {
	return (
		<div style={{paddingTop: '16px'}}>
  		<i className="fa fa-spinner fa-spin fa-3x fa-fw align-baseline"></i>
			<div>Loading...</div>
		</div>	
	)
}

export default spinner;