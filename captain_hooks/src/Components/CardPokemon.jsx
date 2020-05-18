import React from "react";

const CardPokemon = ({ pokemon }) => {
  return (
    <div className="CardPokemon">
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </div>
  );
};

export default CardPokemon;
