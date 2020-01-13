import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleCardFlip = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    // console.log(this.props)
    return (
      <Card>
        <div>
          <div onClick={this.handleCardFlip} className="image">
            <img src={ this.state.clicked === false ? 
                       this.props.sprites.front :
                       this.props.sprites.back } alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { this.props.stats[this.props.stats.length-1].value }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
