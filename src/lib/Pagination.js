import React from 'react';

const pagination = (props) => {
	let paginatedElements = [];
	for (let key in props.links) {
		paginatedElements.push(props.links[key]);
	};
	let numberedElements = paginatedElements.map((i, j) => {
		return (
			<li className={i.active ? "page-item active" : "page-item"} key={j}>
			  <a className= "page-link" id={i.id} href={i.route} onClick={props.changePage}>{i.displayValue}</a>
			</li>
		)
	});
	return  (
		<div>
		  <ul className="pagination">
		    <li className={paginatedElements[0].active ? "page-item disabled" : "page-item"}>
			  	<a className= "page-link" id={0} href='#' onClick={props.changePage}>&laquo;</a>
				</li>
		    {numberedElements}
		    <li className={paginatedElements[paginatedElements.length-1].active ? "page-item disabled" : "page-item"}>
			  	<a className= "page-link" id={paginatedElements.length+1} href='#' onClick={props.changePage}>&raquo;</a>
				</li> 
		  </ul>
		</div>
	);
}

export default pagination;