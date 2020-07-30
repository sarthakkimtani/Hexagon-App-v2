import React from "react";
import "./Gallery.css"

class Gallery extends React.Compnent {
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
			<div>Gallery</div>
			);
	}
}

export default Gallery