import React, { Component } from "react";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

import "./App.css";
import axios from "axios";

const API_KEY = "e41d6f7ea0e52626f592be6d89795bcb";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = e => {
    e.preventDefault();
    const recipeName = e.target.recipeName.value;
    const URL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`;
    axios
      .get(URL)
      .then(res => res.data)
      .then(data => {
        this.setState({
          recipes: data.recipes
        });
      })
      .catch(err => {
        if (err) {
          console.error("Cannot fetch Weather Data from API, ", err);
        }
      });
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  componentDidUpdate() {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
