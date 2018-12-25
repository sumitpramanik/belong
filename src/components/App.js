import React, { Component } from "react";
import "../styles/App.css";
import Posts from "./Posts";
import store from "../store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Posts />
      </Provider>
    );
  }
}

export default App;
