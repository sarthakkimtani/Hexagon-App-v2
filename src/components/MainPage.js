import React from "react";
import { unsplash } from "../api/unsplash";
import { toJson } from "unsplash-js";
import axios from "axios";
import Gallery from "./Gallery";
import Chip from "./Chip";
import Grid from "./Grid";
import "./MainPage.css";
import { ReactComponent as Download } from "../assets/svg/download.svg";

class MainPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { term: "", images: [] } 
		this.formSubmit = this.formSubmit.bind(this);
	}

	downloadImg(id) {
		unsplash.photos.getPhoto(id)
		.then(toJson)
		.then(json => {
			const proxyUrl = "https://cors-anywhere.herokuapp.com/";
			axios({
				method: 'GET',
				url: proxyUrl + json.links.download,
				responseType: 'blob'
			})
			.then(res => {
				console.log(res)
				const url = window.URL.createObjectURL(new Blob([res.data]));
  				const link = document.createElement('a');
  				link.href = url;
  				link.setAttribute('download', 'image.jpg');
  				document.body.appendChild(link);
  				link.click();
			});
		});
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
					<img src={image.urls.small} alt={image.description} />
					  <a className="download-btn" onClick={ () => { this.downloadImg(image.id) } }>
					    <Download className="download"/>
					  </a>
					</div>
				);
			})
		}
		else {
			var imgs = this.state.images.map(image => {
					return(
					<div key={image.id}>
					  <img src={image.urls.small} alt={image.description} />
					    <a className="download-btn" onClick={ () => { this.downloadImg(image.id) } }>
					  	  <Download className="download" />
					    </a>
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
		const input = document.getElementById("search")
		return(
			<div>
			  <form onSubmit={this.formSubmit}>
			    <input type="text" placeholder="Search" id="search" autoComplete="true" onChange={e => {
			    	this.setState({term: e.target.value})
			    }} />
			    <Gallery />
			    <div id="sunny-chip" >
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
			  </form> 
			  <Grid>
				{this.renderImages()}
			  </Grid>
			</div> 
			);
	}
}

export default MainPage;