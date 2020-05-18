import React, { useState } from "react";
import HookPokemon from "Components/HookPokemon";
import HookListPokemon from "Components/HookListPokemon";
import Container from "Components/Container";

const HookAsync = () => {
  const [selectedPokemon, setSelectedPokmon] = useState(null);

  const handleSelectedPokemon = (index) => {
    setSelectedPokmon(index + 1);
  };

  return (
    <Container>
      <h1 className="title">Lets get some Pokemons !</h1>
      <div className="d-flex">
        <HookListPokemon pokemonHandler={handleSelectedPokemon} />
        {selectedPokemon && <HookPokemon selectedPokemon={selectedPokemon} />}
      </div>
    </Container>
  );
};

export default HookAsync;
