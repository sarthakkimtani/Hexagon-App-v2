import React from 'react';
import "./AgreementPage.css";
import AgreementCard from "./AgreementCard";
import logo from "../assets/logo/logo-sm.png";

class AgreementPage extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div style={{ 'color': 'white' }}>
                <img src={logo} id="logo" alt="logo" />
                <h3 id="heading">Hexagon</h3>
                <AgreementCard />
            </div>
        );
    }
}

export default AgreementPage;
