import React from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => {
  return (
    <ul>
      {props.recipes.map(recipe => {
        return <Recipe recipeName={recipe} />;
      })}
    </ul>
  );
};

export default RecipeList;
