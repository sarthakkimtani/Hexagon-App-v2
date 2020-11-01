import React from "react";
import logo from "../assets/logo/logo.png";
import "./Card.css";
import { BrowserRouter } from "react-router-dom";

class Card extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <BrowserRouter>
              <div className="container-card">
                <h3 className="heading-card">Hexagon</h3>
		        <h6 className="sub-heading">A Wallpaper App build for your Desktop</h6>
		        <img src={logo} className="logo" alt="logo"></img>
              </div>
            </BrowserRouter>
        );
    }
}

export default Card;