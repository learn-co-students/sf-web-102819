import React, {Component} from "react";

class RecipeForm extends Component {
  constructor() {
    super()
    this.state = {
      recipeName: ""
    };
  };

  handleNameChange = (event) => {
    this.setState({
      recipeName: event.target.value
    });
    console.log(this.state.recipeName)
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.makeNewRecipe(this.state.recipeName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="recipe-name">Recipe Name</label>
          <input id="recipe-name" name="recipeName" type="text" onChange={this.handleNameChange} />
          <input type="submit" value="Create Recipe" />
        </form>
      </div>
    );
  };

};

export default RecipeForm;
