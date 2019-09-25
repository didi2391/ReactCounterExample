import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// import Counter from "./container/Counter";
import CounterHooks from "../src/container/CounterHooks";
import counterReducer from "./store/reducers/counterReducer";

import "./styles.css";

const store = createStore(counterReducer);

function RootApp() {
  return (
    <div className="App">
      <CounterHooks />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <RootApp />
  </Provider>,
  rootElement
);
