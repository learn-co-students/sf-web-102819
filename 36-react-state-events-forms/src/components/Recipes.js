import React from "react";
import Recipe from "./Recipe";

const Recipes = props => {
  return (
    <div>
      <ul>
        {props.recipes.map((recipe, i) => {
          return <Recipe key={i} recipeName={recipe} />;
        })}
      </ul>

      {props.snippet}
    </div>
  );
};

export default Recipes;
