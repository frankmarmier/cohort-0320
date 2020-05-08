import React from "react";
import apiHandler from "../apiHandler/apiHandler";

class CharacterEditForm extends React.Component {
  state = {
    name: this.props.character.name,
    side: this.props.character.side,
    bio: this.props.character.bio,
    id: this.props.character._id,
    sides: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleForm = (event) => {
    event.preventDefault();

    apiHandler
      .patch("/api/characters/" + this.state.id, {
        name: this.state.name,
        side: this.state.side,
        bio: this.state.bio,
      })
      .then((apiResponse) => {
        console.log(apiResponse.data);
        this.props.updateCharacter(apiResponse.data);
        // this.props.history.push("/characters");
      })
      .catch((apiError) => {
        console.log(apiError.response.data.message);
      });
  };

  render() {
    console.log(this.props);
    return (
      <form onChange={this.handleChange} onSubmit={this.handleForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={this.props.character.name}
          />
        </div>

        <div>
          <label htmlFor="side">Side</label>

          <select
            name="side"
            id="side"
            onChange={this.handleChange}
            value={this.props.character.side}
          >
            <option value="super-hero">Super hero</option>
            <option value="villain">Villain</option>
          </select>
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            name="bio"
            defaultValue={this.props.character.bio}
          />
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default CharacterEditForm;
