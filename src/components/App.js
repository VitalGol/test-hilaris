import React, { Component } from "react";
import Dawer from "./Dawer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello {this.props.name}</h1>
        <Dawer />
      </div>
    );
  }
}

export default App;
