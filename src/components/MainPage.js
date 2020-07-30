import React from "react";
import Gallery from "./Gallery"

class MainPage extends React.Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props)
	}
	
	render() {
		return(
			<div>
			  <Gallery />
			</div> 
			);
	}
}

export default MainPage;