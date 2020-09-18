import React from "react";
import { unsplash } from "../api/unsplash";
import { toJson } from "unsplash-js";
import Gallery from "./Gallery";
import Grid from "./Grid";
import "./MainPage.css";
import Chip from "./Chip";
import {ReactComponent as Download} from "../assets/svg/download.svg";
import http from "http";

class MainPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { term: "", images: [] } 
		this.formSubmit = this.formSubmit.bind(this)
	}

	renderImages() {
		if(this.state.term === "") {
			unsplash.collections.getCollectionPhotos(1199299,1,10,"popular")
			.then(toJson)
			.then(json => {
				 this.setState({ images: json });
			});
			
			var imgs = this.state.images.map(image => {
				return(
					<div key={image.id}>
					<img src={image.urls.small} alt={image.description} onClick={this.onImgClick} />
					<button type="button" className="download-btn">
					  <Download className="download"/>
					</button>
					</div>
				);
			})
		}
		else {
			var imgs = this.state.images.map(image => {
					return(
					<div key={image.id}>
					  <img src={image.urls.small} alt={image.description} />
					  <button type="button" class="download-btn">
					  	<Download className="download" />
					  </button>
					</div>
					);
				});
		}
		return imgs
	}

	formSubmit(e) {
		e.preventDefault();
		unsplash.search.photos(this.state.term,1)
		.then(toJson)
		.then(json => {
			this.setState({ images: json.results });
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
			  <Grid>
				{this.renderImages()}
			  </Grid>
			</div> 
			);
	}
}

export default MainPage;