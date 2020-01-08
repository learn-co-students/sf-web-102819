import React, { Component } from "react";
import Character from "../components/Character";

class Characters extends Component {
  render() {
    return (
      <div>
        {this.props.characters.map(character => {
          return (
            <Character
              key={character.id}
              character={character}
              handleCharClick={this.props.addToFavorites}
            />
          );
        })}
      </div>
    );
  }
}

export default Characters;
