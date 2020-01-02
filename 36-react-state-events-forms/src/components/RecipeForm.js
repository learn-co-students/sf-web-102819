import React, { Component } from "react";

class RecipeForm extends Component {
  state = { recipeName: "" };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.makeNewRecipe(this.state.recipeName);
  };

  handleNameChange = e => {
    this.setState({
      recipeName: e.target.value
    });

		// Uncomment this if you want to call the addRecipeSnippet function
    // this.setState(
    //   {
    //     recipeName: e.target.value
    //   },
    //   function() {
    //     this.props.addRecipeSnippet(this.state.recipeName);
    //   }
    // );
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h2>Create A New Recipe</h2>

        <div className="input-group">
          <label htmlFor="recipe-name">Recipe Name</label>
          <input
            id="recipe-name"
            name="recipeName"
            type="text"
            onChange={this.handleNameChange}
          />
        </div>

        <input type="submit" value="Create Recipe" />
      </form>
    );
  }
}

export default RecipeForm;
