import React, { Component } from "react";
import MemberCard from "./MemberCard";
import FilterComponent from "./FilterComponent";
import Search from "./Search";

class Teams extends Component {
  // https://reactjs.org/docs/react-component.html#constructor
  state = {
    search: "",
    selectedTeam: null,
  };

  handleFilter = (teamType) => {
    this.setState({ selectedTeam: teamType });
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  // handleMyCheckBox = (event) => {
  //   console.log(event.target.checked);
  // };

  render() {
    const filteredArray = this.props.members.filter((member) => {
      // honey-badger
      //null
      // racoon
      if (this.state.selectedTeam) {
        return (
          member.name.includes(this.state.search) &&
          member.team === this.state.selectedTeam
        );
      }
      return member.name.includes(this.state.search);
    });

    return (
      <React.Fragment>
        <Search clbk={this.handleSearch} />
        {/* <input type="checkbox" onChange={this.handleMyCheckBox} /> */}
        <FilterComponent clbk={this.handleFilter} />

        <div className="Teams">
          {filteredArray.map((member, index) => (
            <MemberCard
              key={index}
              index={index}
              member={member}
              clbk={this.props.addMember}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Teams;
