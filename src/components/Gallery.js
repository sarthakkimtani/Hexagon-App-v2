import React from "react";
import "./Gallery.css"

class Gallery extends React.Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div className="container-gallery">
			  <h3 id="heading-gallery">Wallpapers</h3>
			</div>
			);
	}
}

export default Gallery