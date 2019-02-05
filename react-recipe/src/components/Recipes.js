import React from "react";
import { Link } from "react-router-dom";

function Recipes(props) {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map(recipe => {
          const { title, image_url, publisher, recipe_id } = recipe;
          return (
            <div
              key={recipe_id}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                <img src={image_url} alt={title} />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {title.length < 20
                      ? `${title}`
                      : `${title.substring(0, 25)}...`}
                  </h5>
                  <p className="recipes__subtitle">
                    Publisher: <span>{publisher}</span>
                  </p>
                </div>
                <button className="recipe_buttons">
                  <Link
                    to={{
                      pathname: `/recipes/${recipe_id}`,
                      state: { recipe: recipe }
                    }}
                  >
                    View Recipe
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
