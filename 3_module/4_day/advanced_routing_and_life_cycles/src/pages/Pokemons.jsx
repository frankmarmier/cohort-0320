import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    console.log("I am mounted !");
    axios
      .get("https://ironhack-pokeapi.herokuapp.com/pokemon")
      .then((apiResponse) => {
        this.setState({ pokemons: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  componentDidUpdate() {
    console.log("I am updated !");
  }

  componentWillUnmount() {
    console.log("I have been killed !");
  }

  render() {
    console.log("I am rendered");
    return (
      <div>
        <h1>Pokemon page !</h1>
        {this.state.pokemons.map((pokemon, index) => (
          <p key={index}>
            {pokemon.name} <Link to={`/pokemons/${pokemon.id}`}>See more</Link>
          </p>
        ))}
      </div>
    );
  }
}

export default Pokemons;
