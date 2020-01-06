import React from 'react';
import RecipeList from './RecipeList';

function App(props) {
  const recipes = ['Kimchi Fried Rice', 'Fruit', 'Whipped Cream'];
  recipes.sort();

  return (
    <div>
      <h1>{props.appTitle}</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
