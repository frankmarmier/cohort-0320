import React, { useState } from "react";
import HookPokemon from "../Components/HookPokemon";
import HookListPokemon from "../Components/HookListPokemon";

const HookAsync = () => {
  const [selectedPokemon, setSelectedPokmon] = useState(null);

  const handleSelectedPokemon = index => {
    setSelectedPokmon(index + 1);
  };

  return (
    <section className="container">
      <h1 className="title">Lets get some Pokemons !</h1>
      <div className="d-flex">
        <HookListPokemon pokemonHandler={handleSelectedPokemon} />
        {selectedPokemon && <HookPokemon selectedPokemon={selectedPokemon} />}
      </div>
    </section>
  );
};

export default HookAsync;
