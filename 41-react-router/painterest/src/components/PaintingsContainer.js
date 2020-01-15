import React from "react";
import PaintingsList from "./PaintingsList";
import artworks from "../artworks";
import { Switch, Route } from "react-router-dom";
import PaintingsNew from "./PaintingsNew";
import PaintingShow from "./PaintingShow";

class PaintingsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      paintings: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.setState({ paintings: artworks });
  }

  handleDelete(id) {
    const updatedState = this.state.paintings.filter(pntg => pntg.id !== id);

    this.setState({ paintings: updatedState });
  }

  handleVote(id) {
    const updatedPaintings = this.state.paintings
      .map(pntg => {
        if (pntg.id === id) {
          return Object.assign({}, pntg, { votes: pntg.votes + 1 });
        } else {
          return pntg;
        }
      })
      .sort((a, b) => b.votes - a.votes);

    this.setState(state => {
      return { paintings: updatedPaintings };
    });
  }

  render() {
    console.log("render of container", this.state);
    return (
      <div>
        <Switch>
          <Route path="/paintings/new" component={PaintingsNew} />
          <Route
            path="/paintings/:slug"
            render={browserInfo => {
              const slug = browserInfo.match.params.slug;
              const painting = this.state.paintings.find(
                painting => painting.slug === slug
              );

              return painting ? (
                <PaintingShow painting={painting} />
              ) : (
                <h1>Loading.....</h1>
              );
            }}
          />
          <Route
            path="/paintings"
            render={() => (
              <PaintingsList
                handleDelete={this.handleDelete}
                handleVote={this.handleVote}
                paintings={this.state.paintings}
              />
            )}
          />
          {/* <Route
            path="/paintings"
            component={PaintingsList
                handleDelete={this.handleDelete}
                handleVote={this.handleVote}
                paintings={this.state.paintings}}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default PaintingsContainer;
