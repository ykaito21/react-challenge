import React, { Component } from "react";
import Movie from "../movie/Movie";
import styles from "./MovieList.module.css";

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    let movieContent;

    if (movies) {
      movieContent = movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ));
    } else {
      movieContent = null;
    }

    return <div className={styles.movieCards}>{movieContent}</div>;
  }
}

export default MovieList;
