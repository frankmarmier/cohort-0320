const express = require("express");
const router = express.Router();
const axios = require("axios");

function getAllPokemons() {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=964");
}

router.get("/pokemons", (req, res) => {
  getAllPokemons()
    .then((apiResponse) => {
      console.log(apiResponse.data);

      const pokemons = apiResponse.data.results.map((pokemon) => {
        const id = pokemon.url.split("/")[6];
        pokemon.id = id;
        return pokemon;
      });
      res.render("pokemons.hbs", {
        pokemons: pokemons,
      });
    })
    .catch((apiErr) => {
      console.log(apiErr);
    });
  // Go get pokemons from API.
  // and then render  a view displaying the pokemons..
});

function getOnePokemon(id) {
  return axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
}

router.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;

  getOnePokemon(id)
    .then((apiResponse) => {
      res.render("pokemonDetail.hbs", {
        pokemon: apiResponse.data,
      });
    })
    .catch((apiErr) => {
      console.log(apiErr);
    });

  // console.log(req.params.id);
});

module.exports = router;
