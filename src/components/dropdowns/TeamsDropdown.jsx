import React, { Component } from "react";

class TeamsDropdown extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    const options = this.props.teams.map((team, index) => (
      <option key={index} value={team.id}>
        {team.name}
      </option>
    ));
    return (
      <select name="teamId" onChange={this.handleChange}>
        <option disabled selected value>
          Select team...
        </option>
        {options}
      </select>
    );
  }
}

export default TeamsDropdown;
