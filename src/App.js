import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";

import history from "./history";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";

// Component
import NavbarComponent from "./components/navbar/navbar.component";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
