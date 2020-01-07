import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: ['Kimchi Fried Rice', 'Fruit', 'Whipped Cream']
    };
  };

  addRecipe = (recipeName) => {
    this.setState({
      recipes: [...this.state.recipes, recipeName]
    });
  };

  render() { 

      return (
      <div>
        <h1>Recipe List</h1>
        <RecipeList recipes={this.state.recipes} />
        <RecipeForm makeNewRecipe={this.addRecipe} />
      </div>
    );
  }
};

export default App;
