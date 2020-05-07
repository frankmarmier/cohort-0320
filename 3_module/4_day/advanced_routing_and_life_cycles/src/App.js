import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NavMain from "./components/NavMain";
import Pokemons from "./pages/Pokemons";
import PokemonDetails from "./pages/PokemonDetails";
import Pokedex from "./pages/Pokedex";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemons" component={Pokemons} />
        <Route path="/pokemons/:id" component={PokemonDetails} />
      </Switch>
    </div>
  );
}

export default App;
