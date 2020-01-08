import React from "react";
import HogDetails from "./HogDetails";

class HogCard extends React.Component {
  state = {
    clicked: false
  };

  // getImage = hogName => {
  //   let formattedName = hogName
  //     .split(" ")
  //     .join("_")
  //     .toLowerCase();
  //   let pigPics = require(`../../hog-imgs/${formattedName}.jpg`);
  //   return pigPics;
  // };

  handleDetailsClick = () => {
    //when clicked, change clicked to true
    this.setState({ clicked: !this.state.clicked });
  };

  handlePhotos = () => {
    // Pig Name -> pig_name
    const slug = this.props.hog.name.split(" ").join("_").toLowerCase()
    return `./hog-imgs/${slug}.jpg`
  }

  render() {
    const {
      hog,
      hog: { name, specialty }
    } = this.props;
    const { clicked } = this.state;

    return (
      <div className="ui card eight wide column pigTile">
        <div className="image">
          <img src={this.handlePhotos()} alt="hogPic" />
        </div>
        <div className="content">
          <h3 className="header">{name}</h3>
          <div className="description">Specialty: {specialty}</div>
        </div>
        <div className="extra content">
          {clicked ? <HogDetails hog={hog} /> : null}

          <button className="ui button" onClick={this.handleDetailsClick}>
            {clicked ? "Less Info" : "More Info"}
          </button>
          <button
            className="ui button"
            onClick={() => this.props.handleBanishedClick(hog)}
          >
            Hide Me{" "}
            <span role="img" aria-label="snout">
              🐽
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default HogCard;
