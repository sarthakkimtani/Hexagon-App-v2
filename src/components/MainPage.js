import React from "react";
import { unsplash } from "../api/unsplash";
import { toJson } from "unsplash-js";
import Gallery from "./Gallery";
import Grid from "./Grid";
import "./MainPage.css";
import Chip from "./Chip";

class MainPage extends React.Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props)
		this.state = { term: "" }
		this.formSubmit = this.formSubmit.bind(this)
	}

	formSubmit(e) {
		e.preventDefault();
		unsplash.search.photos(this.state.term,1)
		.then(toJson)
		.then(json => {
			console.log(json.results);
		});
	}
	
	render() {
		return(
			<div>
			  <form onSubmit={this.formSubmit}>
			    <input type="text" placeholder="Search" id="search" autoComplete="true" onChange={e => {
			    	this.setState({term: e.target.value})
			    }} />
			  </form>
			  <Gallery />
			  <div id="sunny-chip">
			    <Chip name="Sunny" />
			  </div> 
			  <div id="beach-chip">
			  	<Chip name="Beach" />
			  </div> 
			  <div id="travel-chip">
			  	<Chip name="Travel" />
			  </div> 
			  <div id="night-chip">
			  	<Chip name="Night" />
			  </div> 
			</div> 
			);
	}
}

export default MainPage;