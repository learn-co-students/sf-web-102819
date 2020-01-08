import React from "react";

class BanishedHogCard extends React.Component {
  state = {
    imgSrc: null
  };

  fetchImage = () => {
    fetch(
      "http://api.giphy.com/v1/gifs/random?tag=bacon-sausage-pork&rating=g&api_key=y7uQOLStw37upyo5FpJwhOTaPPaqS6vU"
    )
      .then(rep => rep.json())
      .then(json => {
        this.setState({
          imgSrc: json.data.image_original_url
        });
      });
  };

  componentDidMount() {
    this.fetchImage();
  }

  render() {
    const { imgSrc: image } = this.state;

    return (
      <div className="ui centered card">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content" onClick={this.fetchImage}>
          <p className="header">RIP {this.props.name}</p>
        </div>
      </div>
    );
  }
}

BanishedHogCard.defaultProps = {
  name: "Babe"
};

export default BanishedHogCard;
