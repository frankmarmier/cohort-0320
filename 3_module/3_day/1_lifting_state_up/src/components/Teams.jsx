import React, { Component } from "react";
import MemberCard from "./MemberCard";
import FilterComponent from "./FilterComponent";
import Search from "./Search";

const allMembers = [
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
    members: allMembers,
  };

  setTeam = (event, index) => {
    // console.log(index);
    // console.log(event.target.value);
    // console.log(event.target.value);
    // console.log("I am being called");

    const copy = [...this.state.members];
    copy[index].team = event.target.value;
    this.setState({ members: copy });
  };

  handleFilter = (teamType) => {
    // console.log(teamType);
    // console.log("Fired from child...");
    if (teamType === "all") {
      this.setState({ members: allMembers });
    } else {
      const filteredState = allMembers.filter(
        (member) => member.team === teamType
      );
      this.setState({ members: filteredState });
    }
  };

  handleSearch = (event) => {
    const filteredArray = allMembers.filter((member) => {
      return member.name.includes(event.target.value);
    });

    this.setState({ members: filteredArray });
  };

  render() {
    return (
      <React.Fragment>
        <Search clbk={this.handleSearch} />

        <FilterComponent clbk={this.handleFilter} />

        <div className="Teams">
          {this.state.members.map((member, index) => (
            <MemberCard
              key={index}
              index={index}
              member={member}
              clbk={this.setTeam}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Teams;
