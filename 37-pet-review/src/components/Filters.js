import React from 'react'

class Filters extends React.Component {

  handleSelectChange = (event) => this.props.onChangeType(event.target.value);

  handleButtonClick = (event) => this.props.onFindPetsClick(event);

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleSelectChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleButtonClick}>
            Find pets
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
