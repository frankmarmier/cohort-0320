import React, { Component } from "react";
import MemberCard from "./MemberCard";

const members = [
  { name: "Anne", team: "racoon" },
  { name: "Benjamin", team: "honey-badger" },
  { name: "Mathias", team: "racoon" },
  { name: "Nelly", team: "racoon" },
  { name: "Maxime F", team: "honey-badger" },
  { name: "Olivier", team: "racoon" },
  { name: "Pauline", team: "honey-badger" },
  { name: "Vladimir", team: "racoon" },
  { name: "Hakim", team: "honey-badger" },
  { name: "Sebastien", team: "racoon" },
  { name: "Guillaume M", team: "honey-badger" },
  { name: "Florian", team: "racoon" },
  { name: "William", team: "honey-badger" },
  { name: "Sam", team: "racoon" },
  { name: "Guillaume G", team: "honey-badger" },
  { name: "Yuval", team: "racoon" },
  { name: "Maxime P", team: "honey-badger" },
  { name: "Louis", team: "racoon" },
  { name: "Rebecca", team: "honey-badger" },
  { name: "Teddy", team: "racoon" },
];

class Teams extends Component {
  state = {
    members: members,
  };

  setTeam = (index, event) => {
    const copy = [...this.state.members];
    copy[index].team = event.target.value;
    this.setState({ members: copy });
  };

  render() {
    return (
      <React.Fragment>
        <div className="Teams">
          {this.state.members.map((member, index) => (
            <MemberCard
              key={index}
              index={index}
              member={member}
              handleChange={this.setTeam}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Teams;
