import React from 'react';

const table = (props) => {
	let display;
	if(props.data === undefined || props.data === null) {
		display = null;
	}
	else {
		// head elements
		let headEl = [];
		if(props.checkbox === true) {
			headEl.push(<th key = {-1}><input type='checkbox' style = {{'cursor' : 'pointer'}} id= 'selectAll' onClick = {props.selectAll} /></th>)
		};
		for (let i in props.data.head) {
			headEl.push(<th key={i}>{props.data.head[i]}</th>)
		};

		//body elements
		let bodyEl = [];
		for(let k in props.data.body) {
			bodyEl.push (
				<tr key = {k} style = {{'cursor': props.clickable ? 'pointer' : 'auto'}} >
					{props.checkbox === true ? <td><input type = 'checkbox' className = 'check-input' id = {k} style = {{'cursor' : 'pointer'}} /></td> : null}
					{	props.data.body[k].map((m,n) => (
							props.clickable ? <td key = {n} onClick = {props.goTo} >{m}</td> : <td key = {n} >{m}</td>
						))
					}
				</tr>
			);				
		}
		
		display = (	
			<div className='table-responsive'>
				<table className={props.border === undefined || props.border === false ? 'table table-hover' : 'table table-hover table-bordered' }>
				  <thead className={props.headColor === undefined || props.headColor === null ? `thead-light` : `thead-${props.headColor}`}>
				    <tr>
				    	{headEl}
				    </tr>
				  </thead>
				  <tbody>
				    {bodyEl}
				  </tbody>
				</table>
			</div>
		);
	}
	return display
}

export default table;