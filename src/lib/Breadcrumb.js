import React from 'react';

const breadcrumb = (props) => {
	let breadcrumbLinks = [];
	for(let key in props.links) {
		breadcrumbLinks.push(props.links[key]);
	};
	let breadcrumbEl = breadcrumbLinks.map((i, j) => {
		let aTags = (
			<a href={i.route}>
				{i.displayValue}
			</a>
		);

		if(j === breadcrumbLinks.length-1) {
			aTags = i.displayValue;
		};
		return (
			<li key={j} className={j === breadcrumbLinks.length-1 ? "breadcrumb-item active" : "breadcrumb-item"}>
				{aTags}
			</li>
		)
	});

	let display = (
		<ol className="breadcrumb">
		  {breadcrumbEl}
		</ol>
	);

	return display
}

export default breadcrumb;