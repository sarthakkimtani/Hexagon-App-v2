import React from "react";
import { unsplash } from "../api/unsplash";
import { toJson } from "unsplash-js";


class MainPage extends React.Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		unsplash.currentUser.profile()
		.then(toJson)
		.then(json => {
			console.log(json)
		})
	}
	render() {
		return(
			<div>Hello!</div> 
			);
	}
}

export default MainPage;