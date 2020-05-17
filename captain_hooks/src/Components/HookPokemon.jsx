import React, { useState, useEffect } from "react";
import CardPokemon from "./CardPokemon";
import apiHandler from "../api/apiHandler";

const pokemonAPI = new apiHandler("https://pokeapi.co/api/v2/pokemon");

const HookPokemon = ({ selectedPokemon }) => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    pokemonAPI
      .get(`/${selectedPokemon}`)
      .then(res => {
        //Emulating crappy internet in order to show Loading...
        setTimeout(() => {
          setLoading(false);
          setPokemon(res.data);
        }, 1000);
      })
      .catch(err => {
        setLoading(false);
      });
  }, [selectedPokemon]);

  if (isLoading) return <div>Loading...</div>;
  if (!pokemon) return null;
  return (
    <div>
      <CardPokemon pokemon={pokemon} />
    </div>
  );
};

export default HookPokemon;
