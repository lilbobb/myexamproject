import React, { Component } from "react";


export class ErrorBound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error)
      return (
        <h1>Oops!!! Error has been found.</h1>
      );

    return this.props.children;
  }
}

export default ErrorBound;
