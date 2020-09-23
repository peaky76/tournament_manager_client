import React, { Component } from "react";

import TeamsDropdown from "../components/dropdowns/TeamsDropdown";
// import VenuesDropdown from "../components/dropdowns/VenuesDropdown";

class FixtureForm extends Component {
  constructor() {
    super();
    this.state = {
      team1: "",
      team2: "",
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
      <form id="form-fixture-create" className="form-create" onSubmit={this.handleSubmit}>
        <TeamsDropdown defaultText="Home team..." />
        <TeamsDropdown defaultText="Away team..." />
        <button className="button-submit">Add fixture</button>
      </form>
    );
  }
}

export default FixtureForm;
