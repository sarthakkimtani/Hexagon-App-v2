import React from "react";
import "./Chip.css"

class Chip extends React.Component {
	 // eslint-disable-next-line
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
			   <button type="button" onClick={this.props.clickEvent} id="chip">{this.props.name}</button>
			</div>
		);
	}
}

export default Chip