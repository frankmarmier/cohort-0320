import React from "react";

const MemberCard = ({ index, member, handleChange }) => {
  return (
    <div className="MemberCard">
      <h3>{member.name}</h3>
      <label htmlFor="">Team racoon</label>
      <input
        type="radio"
        value="racoon"
        checked={member.team === "racoon"}
        onChange={(event) => handleChange(index, event)}
      />

      <label htmlFor="">Team honey-badger</label>
      <input
        type="radio"
        value="honey-badger"
        checked={member.team === "honey-badger"}
        onChange={(event) => handleChange(index, event)}
      />
    </div>
  );
};

export default MemberCard;
