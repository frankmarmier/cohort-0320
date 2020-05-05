import React, { Component } from "react";
import data from "../toto.json";

class Pokemons extends Component {
  state = {
    pokemons: data,
    sort: false,
  };

  handleSort = (event) => {
    this.setState({ sort: !this.state.sort });
  };

  handleRemove = (index) => {
    // console.log(event.target);
    // const newPokemons = [...this.state.pokemons];
    // newPokemons.splice(index, 1);
    // this.setState({ pokemons: newPokemons });

    this.setState({
      pokemons: this.state.pokemons.filter((pokemon, pokemonIndex) => {
        return pokemonIndex !== index;
      }),
    });
  };

  handleReset = () => {
    this.setState({ pokemons: data });
  };

  sortPokemons = () => {
    if (this.state.sort) {
      return [...this.state.pokemons].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      return this.state.pokemons;
    }
  };

  render() {
    // let parsedPokemons = this.state.pokemons;

    // if (this.state.sort) {
    //   parsedPokemons = [...this.state.pokemons].sort((a, b) => {
    //     return a.name.localeCompare(b.name);
    //   });
    // }

    return (
      <div>
        <h1>Pokemons</h1>
        <button onClick={this.handleSort}>Sort</button>
        <button onClick={this.handleReset}>Reset</button>
        {this.sortPokemons().map((pokemon, index) => (
          <p key={index}>
            {pokemon.name}
            <button onClick={(event) => this.handleRemove(index)}>
              Remove
            </button>
          </p>
        ))}
      </div>
    );
  }
}

export default Pokemons;
