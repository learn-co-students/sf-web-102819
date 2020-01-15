import React, { Component } from 'react';

class PaintingNew extends Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className="ui form"
      >
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div className="field">
          <label>Artist</label>
          <input type="text" name="Artist" placeholder="Artist" />
        </div>
        <button className="ui big green basic button" type="submit">
          Add Painting
        </button>
      </form>
    );
  }
}

export default PaintingNew;
