import React from "react";
import { Link } from "react-router-dom";

function Recipe(props) {
  const {
    title,
    image_url,
    publisher,
    publisher_url,
    source_url
  } = props.location.state.recipe;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <div className="container" style={{ marginBottom: "2rem" }}>
        <div className="recipes__box">
          <div className="active-recipe">
            <img className="active-recipe__img" src={image_url} alt={title} />
            <h3 className="active-recipe__title">{title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Detail:
              <span>
                <a href={source_url}>{source_url}</a>
              </span>
            </p>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={publisher_url}>{publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
