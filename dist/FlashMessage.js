import React from 'react';

var flashMessage = function flashMessage(props) {
	var display = null;
	if (props.message === null || props.message === '' || props.message === undefined || props.messageType === null || props.messageType === undefined || props.messageType === '') {
		display = null;
	} else {
		display = React.createElement(
			'div',
			{ className: 'alert alert-' + props.messageType },
			React.createElement(
				'button',
				{ type: 'button', className: 'close', onClick: props.dismiss },
				'\xD7'
			),
			props.message
		);
	};

	return display;
};
export default flashMessage;