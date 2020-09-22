import React, { Component } from "react";
import VenuesDropdown from "../components/dropdowns/VenuesDropdown";

class FixtureForm extends Component {
  constructor() {
    super();
    this.state = {
      team1: "",
      team2: "",
      venueId: "",
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const match = {
      team1: this.state.team1,
      team2: this.state.team2,
      venue: {
        id: this.state.venueId,
      },
    };
    this.props.handlePost(match);
  }

  render() {
    return (
      <form id="form-match-create" className="form-create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="team1"
          value={this.state.team1}
          onChange={this.handleChange}
          placeholder="Team A"
        ></input>
        <input
          type="text"
          name="team2"
          value={this.state.team2}
          onChange={this.handleChange}
          placeholder="Team B"
        ></input>
        <VenuesDropdown onChange={this.handleChange} />
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default FixtureForm;
