import React, { Component } from "react";
import ClassListPokemon from "Components/ClassListPokemon";
import ClassPokemon from "Components/ClassPokemon";
import Container from "Components/Container";

class UsingAsync extends Component {
  state = {
    selectedPokemon: "",
  };

  handleSelectedPokemon = (index) => {
    this.setState({ selectedPokemon: index + 1 });
  };

  render() {
    return (
      <Container>
        <h1 className="title">Lets get some Pokemons !</h1>
        <div className="d-flex">
          <ClassListPokemon pokemonHandler={this.handleSelectedPokemon} />
          {this.state.selectedPokemon && (
            <ClassPokemon selectedPokemon={this.state.selectedPokemon} />
          )}
        </div>
      </Container>
    );
  }
}

export default UsingAsync;
