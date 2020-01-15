import React from 'react';
import PaintingList from './PaintingList';
import PaintingNew from './PaintingNew';
import PaintingShow from './PaintingShow';
import { Switch, Route } from 'react-router-dom';
// import artworks from '../artworks';
import api from '../services/api';

class PaintingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paintings: []
    };
  }

  componentDidMount() {
    console.log('PaintingContainer mounted!');
    const token = localStorage.getItem('token');
    if (token) {
      api.paintings.getPaintings().then(paintings => {
        this.setState({ paintings: this.sortPaintings(paintings) });
      });
    } else {
      this.props.history.push('/login');
    }
  }

  sortPaintings(paintings) {
    return paintings.sort((a, b) => b.votes - a.votes);
  }

  handleDelete = id => {
    this.setState(prevState => ({
      paintings: prevState.paintings.filter(p => p.id !== id)
    }));
  };

  handleVote = id => {
    const updatedPaintings = this.state.paintings.map(p => {
      if (p.id !== id) {
        return p;
      } else {
        return { ...p, votes: p.votes + 1 };
      }
    });
    this.setState({
      paintings: this.sortPaintings(updatedPaintings)
    });
  };

  render() {
    console.log('Container props', this.props);
    return (
      <div>
        <Switch>
          <Route path="/paintings/new" component={PaintingNew} />
          <Route
            path="/paintings/:slug"
            render={({ match }) => {
              // look thru all the paintings in State
              // find the one that its slug matches

              const painting = this.state.paintings.find(
                p => p.slug === match.params.slug
              );
              return painting ? (
                <PaintingShow painting={painting} />
              ) : (
                <div>Loading...</div>
              );
            }}
          />
          <Route
            path="/paintings"
            render={() => {
              return (
                <PaintingList
                  handleVote={this.handleVote}
                  handleDelete={this.handleDelete}
                  paintings={this.state.paintings}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default PaintingContainer;
