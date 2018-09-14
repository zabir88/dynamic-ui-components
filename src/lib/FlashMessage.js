import React from 'react';

const flashMessage = (props) => {
	let display = null;
	if ((props.message !== null || props.messageType !== null) && (props.message !== undefined || props.messageType !== undefined) && (props.message !== '' || props.messageType !== '')) {
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