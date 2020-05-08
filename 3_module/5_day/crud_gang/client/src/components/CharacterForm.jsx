import React from "react";
import apiHandler from "../apiHandler/apiHandler";

class CharacterForm extends React.Component {
  state = {
    name: "",
    side: "super-hero",
    bio: "",
    sides: [],
  };

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleForm = (event) => {
    event.preventDefault();

    apiHandler
      .post("/api/characters", {
        name: this.state.name,
        side: this.state.side,
        bio: this.state.bio,
      })
      .then((apiResponse) => {
        this.props.history.push("/characters");
      })
      .catch((apiError) => {
        console.log(apiError.response.data.message);
      });
  };

  render() {
    console.log(process.env.REACT_APP_BACKEND_URL);
    console.log(this.props);
    return (
      <form onChange={this.handleChange} onSubmit={this.handleForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="side">Side</label>

          <select
            name="side"
            id="side"
            onChange={this.handleChange}
            value={this.state.sides[0]}
          >
            <option value="super-hero">Super hero</option>
            <option value="villain">Villain</option>
          </select>
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" name="bio" />
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default CharacterForm;
