import React, { Component } from "react";
import CardPokemon from "Components/CardPokemon";
import apiHandler from "api/apiHandler";

const pokemonAPI = new apiHandler("https://pokeapi.co/api/v2/pokemon");

class ClassPokemon extends Component {
  state = {
    pokemon: null,
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    pokemonAPI
      .get(`/${this.props.selectedPokemon}`)
      .then(res => {
        //Emulating crappy internet in order to show Loading...
        setTimeout(() => {
          this.setState({ pokemon: res.data, isLoading: false });
        }, 1000);
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedPokemon !== this.props.selectedPokemon) {
      this.setState({ isLoading: true });
      pokemonAPI
        .get(`${this.props.selectedPokemon}`)
        .then(res => {
          //Emulating crappy internet in order to show Loading...
          setTimeout(() => {
            this.setState({ pokemon: res.data, isLoading: false });
          }, 1000);
        })
        .catch(err => {
          this.setState({ isLoading: false });
        });
    }
  }

  componentWillUnmount() {}

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    if (!this.state.pokemon) return <div>404 No pokemon here.</div>;

    return (
      <div>
        <CardPokemon pokemon={this.state.pokemon} />;
      </div>
    );
  }
}

export default ClassPokemon;
