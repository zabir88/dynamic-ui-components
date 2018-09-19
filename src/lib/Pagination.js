import React from 'react';
import Aux from './Aux';

const pagination = (props) => {
	let displayCounts = null;
	if(props.perPage === null || props.perPage === undefined || props.total === null || props.total === undefined || props.currentPage === null || props.currentPage === undefined) {
		displayCounts;
	}
	else {
		if(props.perPage > props.total) {
			displayCounts = (
				<div className={props.position === 'left' ? 'justify-content-begin float-right' : 'justify-content-begin float-left'}>
	      	<p> 1 - {props.total} of {props.total} Total</p>
	    	</div>
			);
		}
		else {
			displayCounts = (
				<div className={props.position === 'left' ? 'justify-content-begin float-right' : 'justify-content-begin float-left'}>
	      	<p> {props.perPage * props.currentPage + 1} - {props.perPage * (props.currentPage + 1)} of {props.total} Total</p>
	    	</div>
			);
		};
	};

	let paginationLinks = [];
	for (let key in props.links) {
		paginationLinks.push(props.links[key]);
	};
	let paginationEl = paginationLinks.map((i, j) => {
		return (
			<li className={i.active ? "page-item active" : "page-item"} key={j}>
			  <a className= "page-link" id={i.id} href={i.route} onClick={props.pageChange}>{i.displayValue}</a>
			</li>
		)
	});
	
	let display =  (
		<Aux>
			{displayCounts}
		  <ul className={props.position === 'left' ? 'pagination float-left' : props.position === 'right' ? 'pagination float-right' : 'pagination' }>
		    <li className={paginationLinks[0].active ? "page-item disabled" : "page-item"}>
			  	<a className= "page-link" id='back' href='#' onClick={props.pageChange}>&laquo;</a>
				</li>
		    {paginationEl}
		    <li className={paginationLinks[paginationLinks.length-1].active ? "page-item disabled" : "page-item"}>
			  	<a className= "page-link" id='next' href='#' onClick={props.pageChange}>&raquo;</a>
				</li> 
		  </ul>
		</Aux>
	);
	
	return display
}

export default pagination;