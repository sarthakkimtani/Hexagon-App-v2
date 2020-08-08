import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Card from "./Card";
import "./HomePage.css";
import AgreementPage from "./AgreementPage";
import { ReactComponent as Wave } from "../assets/svg/wave.svg";

class HomePage extends React.Component {
    constructor(props) {
		super(props);
		this.buttonClick = this.buttonClick.bind(this);
	}

    render() {
        return(
		<BrowserRouter>
			<Route path="/agree" component={AgreementPage} />
        	<div style={{'visibility':'true'}} id="main">
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