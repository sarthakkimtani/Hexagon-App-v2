import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Card from "./Card";
import "./HomePage.css";
import { ReactComponent as Wave } from "../assets/svg/wave.svg";

class HomePage extends React.Component {
	// eslint-disable-next-line
    constructor(props) {
		super(props);
	}

    render() {
        return(
		<BrowserRouter>
        	<div id="main">
           	  <Card />
		      <Wave className="wave" />
				<button type="button" className="button" style={{ 'outline': 'none'}}>
                  <Link to="/agree" style={{ 'textDecoration': 'none', 'color': 'white' }}>
		              Get Started
		          </Link>
                </button>
            </div>
		</BrowserRouter>
        );
	}
}

export default HomePage;