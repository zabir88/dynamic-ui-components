import React from 'react';

const alert = (props) => {
	let type = null;
	if (props.bsStyle === null  || props.bsStyle === undefined || props.bsStyle === '') {
		type = 'alert alert-primary'
	}
	else {
		type = `alert alert-${props.bsStyle}`;
	};
	return (
		<div className={type}>
			<button type="button" className="close" onClick={props.dismiss}>&times;</button>
			{props.children}
		</div>
	)
}
export default alert;