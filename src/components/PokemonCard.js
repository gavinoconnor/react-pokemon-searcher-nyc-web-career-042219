import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    open: true
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
    console.log('click')
  }

  toggleImage = () => {
    if (this.state.open) {
      return this.props.sprites.front
    } else {
      return this.props.sprites.back
    }
  }


  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleToggle}>
            <img src={this.toggleImage()}/>
            <img alt=""/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

// height: 10,
// weight: 130,
// id: 2,
// name: "ivysaur",
// abilities: [
// "overgrow",
// "chlorophyll"
// ],
// moves: [ ],
// stats: [
// {
// value: 80,
// name: "special-defense"
// },
// {
// value: 80,
// name: "special-attack"
// },
// {
// value: 63,
// name: "defense"
// },
// {
// value: 62,
// name: "attack"
// },
// {
// value: 60,
// name: "speed"
// },
// {
// value: 60,
// name: "hp"
// }
// ],
// types: [
// "grass",
// "poison"
// ],
// sprites: {
// front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
// back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
// }
// },
