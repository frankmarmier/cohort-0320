import React from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import apiHandler from "../apiHandler/apiHandler";

// const api = new apiHandler();

class CharactersPage extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    // console.log(apiHandler);
    apiHandler
      .get("/api/characters")
      .then((apiResponse) => {
        console.log(apiResponse.data);
        this.setState({ characters: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        <h1>Characters page !</h1>
        {this.state.characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
    );
  }
}

export default CharactersPage;
