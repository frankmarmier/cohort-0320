import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    axios
      .get("https://ironhack-pokeapi.herokuapp.com/pokemon/" + id)
      .then((apiResponse) => {
        console.log(apiResponse.data);
        this.setState({ pokemon: apiResponse.data });
      })
      .catch((error) => {});
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.match.params.id != previousProps.match.params.id) {
      console.log("I am being updated !");
      const id = this.props.match.params.id;
      axios
        .get("https://ironhack-pokeapi.herokuapp.com/pokemon" + id)
        .then((apiResponse) => {
          console.log(apiResponse.data);

          this.setState({ pokemon: apiResponse.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleClick = (e) => {
    console.log(this.props.history.push("/"));
  };

  render() {
    if (!this.state.pokemon) return null;

    return (
      <div>
        <button onClick={this.handleClick}>Go to home page</button>
        <h2>Pokemon details !</h2>
        <pre>{JSON.stringify(this.props.match.params, null, 2)}</pre>
        <p>{this.state.pokemon.name}</p>
        <img src={this.state.pokemon.picture} alt="" />
        <Link to={`/pokemons/${Number(this.props.match.params.id) + 1}`}>
          See next pokemon !
        </Link>
      </div>
    );
  }
}

export default PokemonDetails;
