import React from "react";

class PaintingDetail extends React.Component {
  render() {
    return (
      <div>
        <img alt={this.props.painting.title} src={this.props.painting.image} />
        <h3>{this.props.painting.title}</h3>
        <h4>
          {this.props.painting.artist.name}{" "}
          {this.props.painting.artist.birthday}-{
            this.props.painting.artist.deathday
          }
        </h4>
        <button onClick={this.props.edit} className="ui button">
          Edit
        </button>
        <button
          className="ui button"
          onClick={() => {
            // tempting but wrong!!
            // this.props.painting.votes += 1;
            this.props.vote(this.props.painting.id);
          }}
        >
          Vote! {this.props.painting.votes}
        </button>
      </div>
    );
  }
}

export default PaintingDetail;
