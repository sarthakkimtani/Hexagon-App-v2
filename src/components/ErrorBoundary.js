import React from "react";
import {ReactComponent as Empty } from "../assets/svg/empty.svg";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1 style={{ "textAlign": "center" }}>Something went wrong.</h1>
          <Empty style={{"position":"absolute","left":"180px","top":"120px","width":"600px", "height": "400px" }} />
        </div>
        );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;