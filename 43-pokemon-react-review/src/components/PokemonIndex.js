import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      displayPokemon: [],
      searchTerm: '',
      allPokemon: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({displayPokemon: data, allPokemon: data})
    })
  }

  handleChange = (e) => {
    if (e.target.value !== '') {
      let newDisplayPokemon = this.state.displayPokemon.filter(pokemon => pokemon.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
      this.setState({ 
        searchTerm: e.target.value,
        displayPokemon: newDisplayPokemon
      })
    } else {
      this.setState({ displayPokemon: this.state.allPokemon, searchTerm: e.target.value })
    }
  }

  handleSubmit = (e) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": e.target.name.value,
        "stats": [
          {
            "value": e.target.hp.value,
            "name": "hp"
          }
        ],
        "sprites": {
          "front": e.target.frontUrl.value,
          "back": e.target.backUrl.value
        }
      })
    })
    .then(res => res.json())
    .then(newPokemon => {
      this.setState({
        allPokemon: [...this.state.allPokemon, newPokemon],
        displayPokemon: [...this.state.allPokemon, newPokemon]
      })
    })
  }

  render() {
    console.log(this.state.displayPokemon)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection displayPokemon={this.state.displayPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
