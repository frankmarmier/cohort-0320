import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharactersPage from "./pages/CharactersPage";
import NavMain from "./components/NavMain";
import CharacterForm from "./components/CharacterForm";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={CharactersPage} />
        <Route path="/characters/new" component={CharacterForm} />
      </Switch>
    </div>
  );
}

export default App;
