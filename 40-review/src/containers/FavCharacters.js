import React, { Component } from "react";
import Character from "../components/Character";

class FavCharacters extends Component {
  render() {
    return (
      <div className="FavCharacters">
        {this.props.favCharacters.map(character => (
          <Character
            character={character}
            handleCharClick={this.props.removeCharFromFavs}
          />
        ))}
      </div>
    );
  }
}

export default FavCharacters;
