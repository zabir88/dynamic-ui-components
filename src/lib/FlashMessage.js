import React from 'react';

const flashMessage = (props) => {
	let display = null;
	if (props.message === null || props.message === '' || props.message === undefined || props.messageType === null  || props.messageType === undefined || props.messageType === '') {
		display = null;
	}
	else {	
		display = (
			<div className={`alert alert-${props.messageType}`}>
				<button type="button" className="close" onClick={props.dismiss}>&times;</button>
				{props.message}
			</div>
		);	
	};
	
	return display;	
}
export default flashMessage;