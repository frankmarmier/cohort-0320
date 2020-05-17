import React from "react";

const CardPokemon = ({ pokemon }) => {
  return (
    <div className="card">
      <h3 className="card-pokemon__name">{pokemon.name}</h3>
      <p>Weight: {pokemon.weight}</p>
      <h4>Types:</h4>
      <div className="card-pokemon__types">
        <div className="card-pokemon__description">
          {pokemon.types.map((type, i) => (
            <p
              className={`card-pokemon__type card-pokemon__type--${type.type.name}`}
              key={i}
            >
              {type.type.name}
            </p>
          ))}
        </div>
      </div>
      <h4>Sprites</h4>
      <div className="card-pokemon__images">
        {Object.keys(pokemon.sprites).map(
          (sprite, i) =>
            pokemon.sprites[sprite] && (
              <img
                className="pokemon-image"
                key={i}
                src={pokemon.sprites[sprite]}
                alt={pokemon.name + i}
              />
            )
        )}
      </div>
    </div>
  );
};

export default CardPokemon;
