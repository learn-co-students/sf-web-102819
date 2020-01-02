import React, { Component } from "react";
import Recipes from "./Recipes";
import RecipeForm from "./RecipeForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      recipes: ["Salami Pizza", "Tacos", "Banana Pancakes"],
      snippet: ""
    };
  }

  addRecipe = recipe => {
    this.setState({ recipes: [...this.state.recipes, recipe] });
  };

  addRecipeSnippet = snippet => {
    this.setState({ snippet: snippet });
  };

  render() {
    return (
      <div>
        <h1>Recipe List</h1>
        <Recipes recipes={this.state.recipes} snippet={this.state.snippet} />
        <RecipeForm
          makeNewRecipe={this.addRecipe}
          addRecipeSnippet={this.addRecipeSnippet}
        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Recipe List</h1>
//       <Recipes />
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Recipe List</h1>
//       <Recipes />
//     </div>
//   );
// };

// const App = () => (
//   <div>
//     <h1>Recipe List</h1>
//     <Recipes />
//   </div>
// );

// const ourObject = {
//   name: "Bob",
//   age: 30
// }

// const name = ourObject.name
// const age = ourObject.age

// const {name, age} = ourObject

// const myFunction = () => {return "Hello"}
// const myFunction = () => "Hello"

export default App;

// addRecipe = recipe => {
//   // Try not using `this.state` within your `setState`
//   this.setState({ recipes: [...this.state.recipes, recipe] });

//   // Do this instead
//   // this.setState(function(prevState) {
//   //   return { recipes: [...prevState.recipes, recipe] };
//   // });

//   // this.setState(prevState => {
//   //   return {
//   //     recipes: [...prevState.recipes, recipe]
//   //   };
//   // });
// };
