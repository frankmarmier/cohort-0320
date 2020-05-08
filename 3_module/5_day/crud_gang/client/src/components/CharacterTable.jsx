import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class CharacterTable extends React.Component {
  // handleEdit = (character) => {
  //   this.props.toggleEditForm(character);
  // };

  render() {
    return (
      <table className="CharacterTable">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Side</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {this.props.characters.map((character, index) => (
            <tr key={index}>
              <td>
                <img
                  className="picture"
                  src={character.picture}
                  alt={character.name}
                />
              </td>
              <td>{character.name}</td>
              <td>{character.side}</td>
              <td>{character.bio}</td>
              <td>
                <FontAwesomeIcon
                  onClick={(event) => this.props.handleDelete(character._id)}
                  icon={faTrashAlt}
                />
                <FontAwesomeIcon
                  onClick={(event) => this.props.toggleEditForm(character)}
                  icon={faEdit}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CharacterTable;
