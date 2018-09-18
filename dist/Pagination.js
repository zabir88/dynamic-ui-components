import React from 'react';

var pagination = function pagination(props) {
	var paginatedElements = [];
	for (var key in props.links) {
		paginatedElements.push(props.links[key]);
	};
	var numberedElements = paginatedElements.map(function (i, j) {
		return React.createElement(
			"li",
			{ className: i.active ? "page-item active" : "page-item", key: j },
			React.createElement(
				"a",
				{ className: "page-link", id: i.id, href: i.route, onClick: props.changePage },
				i.displayValue
			)
		);
	});
	return React.createElement(
		"div",
		null,
		React.createElement(
			"ul",
			{ className: "pagination" },
			React.createElement(
				"li",
				{ className: paginatedElements[0].active ? "page-item disabled" : "page-item" },
				React.createElement(
					"a",
					{ className: "page-link", id: 0, href: "#", onClick: props.changePage },
					"\xAB"
				)
			),
			numberedElements,
			React.createElement(
				"li",
				{ className: paginatedElements[paginatedElements.length - 1].active ? "page-item disabled" : "page-item" },
				React.createElement(
					"a",
					{ className: "page-link", id: paginatedElements.length + 1, href: "#", onClick: props.changePage },
					"\xBB"
				)
			)
		)
	);
};

export default pagination;