import React from 'react';

var spinner = function spinner(props) {
	return React.createElement(
		'div',
		{ style: { paddingTop: '16px' } },
		React.createElement('i', { className: 'fa fa-spinner fa-spin fa-3x fa-fw align-baseline' }),
		React.createElement(
			'div',
			null,
			'Loading...'
		)
	);
};

export default spinner;