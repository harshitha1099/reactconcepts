import React, { Component } from "react";

const withCounter = (WrappedComponent, value = 1) => {
  class EnhancedComponent extends Component {
    state = {
      count: 0,
    };

    incrementCount = () => {
      this.setState({
        count: this.state.count + value,
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          //very much important add the previously
          //passed props to the returned component
          {...this.props}
        />
        
      );
    }
  }
  return EnhancedComponent
};

export default withCounter;
