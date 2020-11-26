import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import HomePage from "./HomePage";
import AgreementPage from "./AgreementPage";
import MainPage from "./MainPage";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <ErrorBoundary>
          <Switch>
            <Route path="/main" component={withRouter(MainPage)} />
            <Route path="/agree" component={withRouter(AgreementPage)} />
            <Route exact path="/" component={withRouter(HomePage)} />
          </Switch>
        </ErrorBoundary>
      </HashRouter>
    );
  }
}

export default App;
