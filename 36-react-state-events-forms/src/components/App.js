import React, { Component } from 'react';
import RecipeList from './RecipeList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: ['Kimchi Fried Rice', 'Fruit', 'Whipped Cream']
    };
  };

  render() { 
      // const recipes = ['Kimchi Fried Rice', 'Fruit', 'Whipped Cream'];

      return (
      <div>
        <h1>Recipe List</h1>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
};

export default App;
