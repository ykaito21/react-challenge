import React, { Component } from "react";
import Header from "./Header";
import Meme from "./Meme";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Meme />
      </div>
    );
  }
}

export default App;
