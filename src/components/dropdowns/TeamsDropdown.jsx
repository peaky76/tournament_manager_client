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
    let options = <option></option>;
    if (this.props.teams) {
      options = this.props.teams.map((team, index) => (
        <option key={index} value={team.id}>
          {team.name}
        </option>
      ));
    }
    return (
      <select name="teamId" onChange={this.handleChange}>
        <option disabled selected value>
          {this.props.defaultText}
        </option>
        {options}
      </select>
    );
  }
}

export default TeamsDropdown;
