import React from 'react';

var breadcrumb = function breadcrumb(props) {
	var breadcrumbLinks = [];
	for (var key in props.links) {
		breadcrumbLinks.push(props.links[key]);
	};
	var breadcrumbEl = breadcrumbLinks.map(function (i, j) {
		var aTags = React.createElement(
			"a",
			{ href: i.route },
			i.displayValue
		);

		if (j === breadcrumbLinks.length - 1) {
			aTags = i.displayValue;
		};
		return React.createElement(
			"li",
			{ key: j, className: j === breadcrumbLinks.length - 1 ? "breadcrumb-item active" : "breadcrumb-item" },
			aTags
		);
	});

	var display = React.createElement(
		"ol",
		{ className: "breadcrumb" },
		breadcrumbEl
	);

	return display;
};

export default breadcrumb;