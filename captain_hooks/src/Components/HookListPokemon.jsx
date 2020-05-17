import React, { useState, useEffect } from "react";
import apiHandler from "../api/apiHandler";

const pokemonAPI = new apiHandler(
  "https://pokeapi.co/api/v2/pokemon?limit=964"
);

const HookListPokemon = ({ pokemonHandler }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    pokemonAPI
      .get("https://pokeapi.co/api/v2/pokemon?limit=964")
      .then(res => {
        //Emulating crappy internet in order to show Loading...
        setTimeout(() => {
          if (isMounted) {
            setPokemons(res.data.results);
            setLoading(false);
          }
        }, 1000);
      })
      .catch(err => {
        if (isMounted) setLoading(false);
      });

    return () => (isMounted = false);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="scrollable pokemon-list">
      {pokemons.map((p, index) => (
        <div
          className="pokemon-name"
          onClick={() => pokemonHandler(index)}
          key={p.name}
        >
          {p.name}
        </div>
      ))}
    </div>
  );
};

export default HookListPokemon;
