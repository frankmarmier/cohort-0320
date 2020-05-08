import React from "react";

const CharacterCard = (props) => {
  console.log(props);
  return (
    <div className="CharacterCard">
      <img
        className="picture"
        src={props.character.picture}
        alt={props.character.name}
      />
      <h1>{props.character.name}</h1>
      <p>{props.character.side}</p>
    </div>
  );
};

export default CharacterCard;
