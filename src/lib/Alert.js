import React, {Component} from 'react';

class alert extends Component {
	state = {
		show: this.props.show
	}

	dismissHandler = (event) => {
		this.setState({show: false})
	}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.show !== this.state.show) {
    	this.setState({ show: nextProps.show });
  	};
	}

	render () {
		let type = null;
		if (this.props.bsStyle === null  || this.props.bsStyle === undefined || this.props.bsStyle === '') {
			type = 'alert alert-primary'
		}
		else {
			type = `alert alert-${this.props.bsStyle}`;
		};
		let display = null;
		if(this.state.show) {
			display = (
				<div className={type}>
					<button type="button" className="close" onClick = {this.dismissHandler.bind(this)}>&times;</button>
					<p>
						{this.props.text}
					</p>
				</div>	
			)
		}

		return display	
	}
} 
	

export default alert;