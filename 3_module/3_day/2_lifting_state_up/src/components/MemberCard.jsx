import React from "react";

const MemberCard = ({ index, member, clbk }) => {
  // console.log(clbk);
  return (
                                  //raccoon
                                // MemberCard team-racoon
    <div className={`MemberCard team-${member.team}`}>
      <h3>{member.name}</h3>
      <label htmlFor="">Team racoon</label>
      <input
        type="radio"
        value="racoon"
        checked={member.team === "racoon"}
        onChange={(event) => clbk(event, index)}
      />
      <label htmlFor="">Team honey-badger</label>
      <input
        type="radio"
        value="honey-badger"
        checked={member.team === "honey-badger"}
        onChange={(event) => clbk(event, index)}
      />
    </div>
  );
};

export default MemberCard;
