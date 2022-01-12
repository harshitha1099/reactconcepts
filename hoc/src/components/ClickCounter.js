import React, { Component } from "react";
import withCounter from "../hoc/withCounter";

export class clickCounter extends Component {
//   state = {
//     count: 0,
//   };

//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

  render() {
      const {count, incrementCount}= this.props
    return (
      <div>
        <button onClick={incrementCount}>
          Click {count} times </button>

          <p>Name:{this.props.name}</p>
      </div>
    );
  }
}

export default withCounter(clickCounter,5);
