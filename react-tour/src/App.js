import React, { Component } from "react";

import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default App;
