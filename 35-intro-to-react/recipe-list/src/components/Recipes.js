import React from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const recipes = ["Salami Pizza", "Tacos", "Banana Pancakes"];

  return (
    <ul>
      {recipes.map(recipe => {
        return <Recipe recipeName={recipe} />;
      })}
    </ul>
  );
};

export default Recipes;
