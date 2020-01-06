import React from 'react';
import Recipe from './Recipe';

function RecipeList(props) {
  // const recipes = ['Kimchi Fried Rice', 'Fruit', 'Whipped Cream'];
  // recipes.sort();

  return (
    <ul>
      {props.recipes.map(recipe => {
        return <Recipe recipeName={recipe} />;
      })}
    </ul>
  );
};

export default RecipeList;
