import React from "react";
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import paintingsData from "../paintings.json";

class PaintingsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPaintingId: null,
      paintings: paintingsData.paintings,
      editing: false
    };
  }

  selectPainting = id => {
    if (this.state.editing) {
      alert("you need to save before switching paintings");
    } else {
      this.setState({ selectedPaintingId: id });
    }
  };

  voteForPainting = id => {
    // make an exact copy
    // except for the things we are changing
    let updatePaintings = this.state.paintings.map(painting => {
      if (painting.id === id) {
        // update the votes
        let newPainting = {
          ...painting,
          votes: painting.votes + 1
        };
        return newPainting;
      } else {
        return painting;
      }
    });
    this.setState({ paintings: updatePaintings });
  };

  updatePaintingInfo = (paintingId, info) => {
    let newPaintingsArray = this.state.paintings.map(painting => {
      if (painting.id === paintingId) {
        // update the painting
        // naive way
        // wrong! painting.title = info.title
        // console.log(painting);
        return {
          ...painting,
          title: info.title,
          artist: {
            name: info.name,
            birthday: info.birthday,
            deathday: info.deathday
          }
        };
      } else {
        return painting;
      }
    });

    this.setState({ paintings: newPaintingsArray, editing: false });
  };

  edit = () => {
    this.setState({ editing: true });
  };

  cancel = () => {
    this.setState({ editing: false });
  };

  render() {
    let selectedPainting = this.state.paintings.find(
      painting => painting.id === this.state.selectedPaintingId
    );
    let paintingToShow = this.state.editing ? (
      <PaintingForm
        cancel={this.cancel}
        painting={selectedPainting}
        updatePaintingInfo={this.updatePaintingInfo}
      />
    ) : (
      <PaintingDetail
        edit={this.edit}
        vote={this.voteForPainting}
        painting={selectedPainting}
      />
    );
    return (
      <div>
        {this.state.selectedPaintingId ? paintingToShow : null}
        <PaintingsList
          selectPainting={this.selectPainting}
          paintings={this.state.paintings}
        />
      </div>
    );
  }
}

export default PaintingsContainer;
