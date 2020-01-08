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

  updateFilterType = (filterValue) => {
    this.setState({filters: {type: filterValue}});
  };

  fetchPets = () => {
    let petURL = '/api/pets'
    if (this.state.filters.type !== 'all') {
      petURL += `?type=${this.state.filters.type}`;
    };
    console.log(`Fetching pets from ${petURL}!`);
    fetch(petURL)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({pets: json});
      });
  };

  adoptPet = (petId) => {
    this.setState(previousState => {
      let petIndex = previousState.pets.findIndex(pet => pet.id === petId);
      previousState.pets[petIndex].isAdopted = true;
      return previousState;
    });
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
              <Filters 
                onChangeType={this.updateFilterType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
