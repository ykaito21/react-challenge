import React, { Component } from "react";
import styles from "./Search.module.css";
import MovieList from "../movieList/MovieList";
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: "",
    movies: [],
    apiURL:
      "https://api.themoviedb.org/3/search/movie?api_key=f2f0241c04fad21c699a139b3e8a1717&query="
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        if (value === "") {
          this.setState({
            movies: []
          });
        } else {
          axios
            .get(`${this.state.apiURL}${this.state.searchTerm}`)
            .then(res => {
              this.setState({
                movies: res.data.results
              });
            })
            .catch(error => console.log(error));
        }
      }
    );
  };
  render() {
    return (
      <div className={styles.search}>
        <form>
          <input
            type="text"
            placeholder="Search Movies"
            name="searchTerm"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        {this.state.movies.length > 0 ? (
          <MovieList movies={this.state.movies} />
        ) : null}
      </div>
    );
  }
}

export default Search;
