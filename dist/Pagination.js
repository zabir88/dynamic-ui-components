import React from 'react';
import Aux from './Aux';

var pagination = function pagination(props) {
	var displayCounts = null;
	if (props.perPage === null || props.perPage === undefined || props.total === null || props.total === undefined || props.currentPage === null || props.currentPage === undefined) {
		displayCounts;
	} else {
		if (props.perPage > props.total) {
			displayCounts = React.createElement(
				'div',
				{ className: props.position === 'left' ? 'justify-content-begin float-right' : 'justify-content-begin float-left' },
				React.createElement(
					'p',
					null,
					' 1 - ',
					props.total,
					' of ',
					props.total,
					' Total'
				)
			);
		} else {
			displayCounts = React.createElement(
				'div',
				{ className: props.position === 'left' ? 'justify-content-begin float-right' : 'justify-content-begin float-left' },
				React.createElement(
					'p',
					null,
					' ',
					props.perPage * props.currentPage + 1,
					' - ',
					props.perPage * (props.currentPage + 1),
					' of ',
					props.total,
					' Total'
				)
			);
		};
	};

	var paginationLinks = [];
	for (var key in props.links) {
		paginationLinks.push(props.links[key]);
	};
	var paginationEl = paginationLinks.map(function (i, j) {
		return React.createElement(
			'li',
			{ className: i.active ? "page-item active" : "page-item", key: j },
			React.createElement(
				'a',
				{ className: 'page-link', id: i.id, href: i.route, onClick: props.pageChange },
				i.displayValue
			)
		);
	});

	var display = React.createElement(
		Aux,
		null,
		displayCounts,
		React.createElement(
			'ul',
			{ className: props.position === 'left' ? 'pagination float-left' : props.position === 'right' ? 'pagination float-right' : 'pagination' },
			React.createElement(
				'li',
				{ className: paginationLinks[0].active ? "page-item disabled" : "page-item" },
				React.createElement(
					'a',
					{ className: 'page-link', id: 'back', href: '#', onClick: props.pageChange },
					'\xAB'
				)
			),
			paginationEl,
			React.createElement(
				'li',
				{ className: paginationLinks[paginationLinks.length - 1].active ? "page-item disabled" : "page-item" },
				React.createElement(
					'a',
					{ className: 'page-link', id: 'next', href: '#', onClick: props.pageChange },
					'\xBB'
				)
			)
		)
	);

	return display;
};

export default pagination;