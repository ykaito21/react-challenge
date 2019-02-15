import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./scss/main.scss";

import "./App.css";

class App extends Component {
  state = {
    showMenu: false
  };

  handleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header showMenu={this.state.showMenu} handleMenu={this.handleMenu} />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
