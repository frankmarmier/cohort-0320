import React, { Component } from "react";
import apiHandler from "api/apiHandler";

const pokemonAPI = new apiHandler(
  "https://pokeapi.co/api/v2/pokemon?limit=964"
);

class ClassListPokemon extends Component {
  state = {
    pokemons: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    pokemonAPI
      .get("/")
      .then((res) => {
        //Emulating crappy internet in order to show Loading...
        this.timeoutid = setTimeout(() => {
          if (this.timeoutid) {
            this.setState({ pokemons: res.data.results, isLoading: false });
            clearTimeout(this.timeoutid);
          }
        }, 1000);
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutid);
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    return (
      <div className="pokemon-list">
        {this.state.pokemons.map((p, index) => (
          <div
            className="pokemon-name"
            onClick={(e) => this.props.pokemonHandler(index)}
            key={index}
          >
            {p.name}
          </div>
        ))}
      </div>
    );
  }
}

export default ClassListPokemon;
