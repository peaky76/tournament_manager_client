import React, { Component } from "react";
import VenuesDropdown from "../components/dropdowns/VenuesDropdown";

class TeamForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shortName: "",
      venueId: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const team = {
      name: this.state.name,
      shortName: this.state.shortName,
      venue: {
        id: this.state.venueId,
      },
    };
    this.props.handlePost(team);
  }

  render() {
    return (
      <form id="form-team-create" className="form-create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Team name..."
        ></input>
        <input
          type="text"
          name="shortName"
          value={this.state.shortName}
          onChange={this.handleChange}
          placeholder="Team abbreviation..."
        ></input>
        <VenuesDropdown defaultText="Home venue..." onChange={this.handleChange} />
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default TeamForm;
