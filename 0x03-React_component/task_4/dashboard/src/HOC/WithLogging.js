import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  class WithLoggingHOC extends Component {
    componentDidMount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Set a custom displayName for easier debugging in React Developer Tools
  WithLoggingHOC.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`;

  return WithLoggingHOC;
}

export default WithLogging;