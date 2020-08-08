import React from "react";
import { unsplash } from "../api/unsplash";
import { toJson } from "unsplash-js";
import "./Chip.css"

class Chip extends React.Component {
	constructor(props) {
		super(props)
	}

	buttonClick() {
		unsplash.search.photos("",1)
		.then(toJson)
		.then(json => {
			console.log(json.results)
		});
	}

	render() {
		return (
			<div>
			   <button type="button" id="chip">{this.props.name}</button>
			</div>
		);
	}
}

export default Chip