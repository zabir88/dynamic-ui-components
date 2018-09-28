import React from 'react';

const sortedTable = (props) => {
	let display;
	if(props.data === undefined || props.data === null){
		display = null;
	}
	else {
		const head = [];
		const body = [];		
		const lengthOfLoop =  Object.entries(props.data)[0][1].displayBody.length;
		for (let i in props.data) {
			head.push(props.data[i].displayHead);
		};
		const headEl = head.map((i, k1) => <th key={k1}>{i}</th>)
		for (let j = 0; j < lengthOfLoop; j++) {
	    let row = [];    
	    for (let i in props.data) {
	      row.push(props.data[i].displayBody[j]);    
	    };
	    body.push(row)
		};
		const bodyEl = (
			body.map((i, k2) => (
				<tr key={k2}>
					{i.map((j, k3) => <td key={k3}>{j}</td>)}
				</tr>
			))
		);
		display = (	
			<div className='table-responsive'>
				<table className="table table-hover">
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

export default sortedTable;