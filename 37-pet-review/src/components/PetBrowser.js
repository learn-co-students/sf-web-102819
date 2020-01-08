import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.petData.map(pet => <Pet key={pet.id} petData={pet} onAdoption={this.props.onAdoption} />)}
    </div>
  }
}

export default PetBrowser;
