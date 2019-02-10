import React from "react";
import styles from "./Movie.module.css";

function Movie(props) {
  const { movie } = props;
  console.log(movie);

  return <div className={styles.card}>{movie.title}</div>;
}

export default Movie;
