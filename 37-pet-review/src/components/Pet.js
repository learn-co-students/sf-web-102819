import React from 'react'

class Pet extends React.Component {

  handleAdoptClick = (event) => {
    this.props.onAdoption(this.props.petData.id);
  };

  render() {

    let buttons = <div className="extra content">
            <button className="ui primary button" onClick={this.handleAdoptClick}>Adopt pet</button>
            <button className="ui disabled button">Already adopted</button>
        </div>

    if (this.props.petData.isAdopted === true) {
      buttons = <div className="extra content">
            <button className="ui disabled button" >Adopt pet</button>
            <button className="ui primary button">Already adopted</button>
        </div>
    };

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petData.gender === 'female' ? '♀' : '♂'}
            {this.props.petData.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petData.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petData.age}</p>
            <p>Weight: {this.props.petData.weight}</p>
          </div>
        </div>
        {buttons}
      </div>
    )
  }
}

export default Pet
