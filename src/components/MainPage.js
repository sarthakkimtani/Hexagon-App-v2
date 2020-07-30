import React from "react";
import { unsplash } from "../api/unsplash";
import Gallery from "./Gallery"
import { toJson } from "unsplash-js";


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