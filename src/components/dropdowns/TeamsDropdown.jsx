import React, { Component } from "react";

class TeamsDropdown extends Component {
  constructor() {
    super();
    this.state = {
      selectedTeamId: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      selectedCountryId: event.target.value,
    });
    this.props.onChange(event);
  }

  render() {
    const options = this.props.teams.map((team, index) => (
      <option key={index} value={team}>
        {team.name}
      </option>
    ));
    return (
      <select name="teamId" onChange={this.handleChange}>
        {options}
      </select>
    );
  }
}

export default TeamsDropdown;
