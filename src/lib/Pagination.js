import React from 'react';

const pagination = (props) => {
	let paginatedElements = props.links.map((i, j) => {
		return (
			<li className={i.active ? "page-item active" : "page-item"} key={j}>
			  <a className= "page-link" id={j+1} href={i.route} onClick={props.pageChange}>{i.displayValue}</a>
			</li>
		)
	});
	
	return  (
		<div>
		  <ul className="pagination">
		    <li className={props.links[0].active ? "page-item disabled" : "page-item"}>
			  	<a className= "page-link" id={0} href='#' onClick={props.pageChange}>&laquo;</a>
				</li>
		    {paginatedElements}
		    <li className={props.links[props.links.length-1].active ? "page-item disabled" : "page-item"}>
			  	<a className= "page-link" id={paginatedElements.length+1} href='#' onClick={props.pageChange}>&raquo;</a>
				</li> 
		  </ul>
		</div>
	);
}

export default pagination;