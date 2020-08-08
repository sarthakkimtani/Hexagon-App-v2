import React from "react";
import "./Grid.css"

class Grid extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			 <div id="grid">
			   {this.props.children}
			 </div>
			);
	}
}

export default Grid