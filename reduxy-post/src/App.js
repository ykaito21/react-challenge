import React, { Component } from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Post List</h1>
          <PostForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
