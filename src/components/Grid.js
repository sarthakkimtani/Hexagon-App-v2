import React from "react";
import "./Grid.css"

class Grid extends React.Component {
	 // eslint-disable-next-line
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