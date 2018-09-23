import React from 'react';

var alert = function alert(props) {
	var type = null;
	if (props.bsStyle === null || props.bsStyle === undefined || props.bsStyle === '') {
		type = 'alert alert-primary';
	} else {
		type = 'alert alert-' + props.bsStyle;
	};
	return React.createElement(
		'div',
		{ className: type },
		React.createElement(
			'button',
			{ type: 'button', className: 'close', onClick: props.dismiss },
			'\xD7'
		),
		props.children
	);
};
export default alert;