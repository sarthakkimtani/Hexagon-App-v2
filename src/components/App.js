import React from "react";
import ErrorBoundary from "./ErrorBoundary";
// import HomePage from "./HomePage";
// import AgreementPage from "./AgreementPage";
import MainPage from "./MainPage";
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <ErrorBoundary>
            <BrowserRouter>
              <div>
                <MainPage />
              </div>
            </BrowserRouter>
            </ErrorBoundary>
        );
    }
}

export default App; 