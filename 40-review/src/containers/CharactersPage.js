import React, { Component } from "react";
import Characters from "./Characters";
import FavCharacters from "./FavCharacters";
// https://rickandmortyapi.com/api/character

class CharactersPage extends Component {
  state = {
    characters: [],
    favCharacters: []
  };

  fetchCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(resp => resp.json())
      .then(data => this.setState({ characters: data.results }));
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  // addToFavorites = characterId => {
  //   const newFavCharacters = [...this.state.favCharacters, characterId];
  //   // const newFavCharacters = this.state.favCharacters.concat(characterId);

  //   this.setState({ favCharacters: newFavCharacters });
  // };

  addToFavorites = character => {
    const newFavCharacters = [...this.state.favCharacters, character];

    this.setState({ favCharacters: newFavCharacters });
  };

  removeCharFromFavs = character => {
    const newFavChars = this.state.favCharacters.filter(
      favChar => favChar.id !== character.id
    );

    this.setState({ favCharacters: newFavChars });
  };

  render() {
    // console.log(this.state.characters)
    // debugger
    const { favCharacters, characters } = this.state;

    return (
      <div>
        <FavCharacters
          favCharacters={favCharacters}
          removeCharFromFavs={this.removeCharFromFavs}
        />

        <Characters
          characters={characters}
          addToFavorites={this.addToFavorites}
        />

        {/* <FavCharacters
          favCharacters={characters.filter(character =>
            favCharacters.includes(character.id)
          )}
        /> */}

        {/* <FavCharacters
          favCharacters={favCharacters.map(favCharId =>
            characters.find(character => character.id === favCharId)
          )}
        /> */}
      </div>
    );
  }
}

export default CharactersPage;
