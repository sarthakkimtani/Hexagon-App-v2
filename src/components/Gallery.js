import React from "react";
import { unsplash } from "../api/unsplash";
import { toJson } from "unsplash-js";
import "./Gallery.css"

class Gallery extends React.Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		unsplash.search.photos("cat",1)
		.then(toJson)
		.then(json => {
			console.log(json.results)
		})
	}
	render() {
		return(
			<div class="container">
			  <h3 id="heading">Wallpapers</h3>
			</div>
			);
	}
}

export default Gallery