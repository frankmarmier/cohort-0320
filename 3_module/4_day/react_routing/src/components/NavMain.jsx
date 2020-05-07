import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavMain = () => {
  return (
    <div>
      <Link exact to="/" activeClassName="TOTO-IS-ACTIVE">
        Home
      </Link>
      <Link activeClassName="TOTO-IS-ACTIVE" to="/about">
        About
      </Link>
      <Link activeClassName="TOTO-IS-ACTIVE" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default NavMain;
