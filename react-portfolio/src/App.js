import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main id="about">
        <h1 class="lg-heading">
          About <span class="text-secondary">Me</span>
        </h1>
        <h2 class="sm-heading">Let me tell you...</h2>
        <div class="icons">
          <a href="#">
            <i class="fab fa-twitter fa-2x" />
          </a>
          <a href="#">
            <i class="fab fa-facebook fa-2x" />
          </a>
          <a href="#">
            <i class="fab fa-linkedin fa-2x" />
          </a>
          <a href="#">
            <i class="fab fa-github fa-2x" />
          </a>
        </div>
      </main>
    );
  }
}

export default App;
