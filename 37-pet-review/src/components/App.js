import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  adoptAPet = (petId) => {
    this.setState(previousState => {
      const petIndex = previousState.pets.findIndex(pet => pet.id === petId);
      previousState.pets[petIndex].isAdopted = true;
      return previousState;
    });
    // fetch POST here to update API
  };

  changeType = (newType) => {
    console.log(`Changing type to ${newType}!`);
    this.setState({filters: {type: newType}});
  };

  findPets = () => {
    let petURL = '/api/pets'
    if (this.state.filters.type !== 'all' ) {
      petURL += `?type=${this.state.filters.type}`
    };
    console.log(`Fetching pets from ${petURL}!`);
    fetch(petURL)
      .then(resp => resp.json())
      .then(json => this.setState({pets: json}));
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets} onAdoption={this.adoptAPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
