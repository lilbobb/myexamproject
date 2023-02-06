import React, { Component } from "react";

function reportError(error, info) { // eslint-disable-line no-unused-vars 
  // send error to server
}
export class ErrorBound extends Component {
  state = { hasError: false };
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    reportError(error, info);
  }
  render() {
    return this.state.hasError ? (
      <div className="eror-mssg">oops! Something went wrong</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBound;
