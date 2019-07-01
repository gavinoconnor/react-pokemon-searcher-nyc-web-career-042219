import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filter: ""
  }

  fetchPokemon = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokemon: data
        })
        console.log(data)
        })
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  handleFilter = (event, data) => {
    this.setState({
      filter: data.value
    })
  }

  applyFilter() {
    return this.state.pokemon.filter(poke => poke.name.includes(this.state.filter))
  }

  addPokemon = (newMon) => {
    let mon = {
      name: newMon.name,
      stats: [{
        value: newMon.value,
        name: "hp"
      }],
      sprites: {
        front: newMon.frontUrl,
        back: newMon.backUrl
      }
    }

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(mon)
    })
      .then(res => res.json())
      .then(data => {
        let newPokemon = [...this.state.pokemon, data]
        this.setState({
          pokemon: newPokemon
        })
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleFilter, 500)} showNoResults={false} />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <PokemonCollection pokemon={this.applyFilter()}/>
      </div>
    )
  }
}

export default PokemonPage
