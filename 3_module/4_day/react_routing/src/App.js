import React from "react";
import AboutPage from "./views/About/AboutPage";
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import NavMain from "./components/NavMain";

import { Switch, Route } from "react-router-dom";

import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <NavMain />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={AboutPage} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>

      <footer>footer</footer>
    </div>
  );
}

export default App;
