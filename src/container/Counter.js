import React, { Component } from "react";

import * as actions from "../store/actions/counterActions";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <p>Counter is {this.props.counter}</p>
        <button onClick={this.props.onIncrementCounter}>INCREMENT</button>
        <button onClick={this.props.onDecrementCounter}>DECREMENT</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actions.incrementCounter()),
    onDecrementCounter: () => dispatch(actions.decrementCounter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
