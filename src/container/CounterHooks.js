import React from "react";

import * as actions from "../store/actions/counterActions";
import { connect } from "react-redux";

const counterHooks = props => {
  return (
    <div>
      <p>Current Counter is {props.counter}</p>
      <button onClick={props.onIncrementCounter}>INCREMENT</button>
      <button onClick={props.onDecrementCounter}>DECREMENT</button>
    </div>
  );
};

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
)(counterHooks);
