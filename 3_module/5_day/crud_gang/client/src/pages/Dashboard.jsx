import React from "react";
import CharacterTable from "../components/CharacterTable";
import CharacterEditForm from "../components/CharacterEditForm";
import apiHandler from "../apiHandler/apiHandler";

class Dashboard extends React.Component {
  state = {
    isEditing: false,
    characterToEdit: null,
    characters: [],
  };

  componentDidMount() {
    apiHandler
      .get("/api/characters")
      .then((apiResponse) => {
        // console.log(apiResponse);
        this.setState({ characters: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  handleDelete = (characterId) => {
    apiHandler
      .remove(`/api/characters/${characterId}`)
      .then((apiResponse) => {
        const newCharacters = this.state.characters.filter(
          (character, index) => {
            return character._id !== characterId;
          }
        );
        this.setState({ characters: newCharacters });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  };

  updateCharacter = (updatedCharacter) => {
    // console.log(updatedCharacter, "in dashvoard");
    const updatedCharacters = this.state.characters.map((character) => {
      if (character._id === updatedCharacter._id) return updatedCharacter;
      else return character;
    });
    this.setState({
      characters: updatedCharacters,
      isEditing: false,
      characterToEdit: null,
    });
  };

  toggleEditForm = (character) => {
    this.setState({ isEditing: true, characterToEdit: character });
  };

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        {this.state.isEditing && (
          <CharacterEditForm
            updateCharacter={this.updateCharacter}
            character={this.state.characterToEdit}
          />
        )}
        <CharacterTable
          characters={this.state.characters}
          toggleEditForm={this.toggleEditForm}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Dashboard;
