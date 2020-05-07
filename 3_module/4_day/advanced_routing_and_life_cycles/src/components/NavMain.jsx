import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = (props) => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/pokemons">
        Pokemons
      </NavLink>
    </div>
  );
};

export default NavMain;
