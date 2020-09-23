import React, { Component } from "react";
import Request from "../helpers/request";

import TeamsDropdown from "../components/dropdowns/TeamsDropdown";

class FixtureForm extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      homeTeamId: "",
      awayTeamId: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/tournaments/" + this.props.id + "/teams").then((data) =>
      this.setState({
        teams: data,
      })
    );
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
        <TeamsDropdown
          teams={this.state.teams}
          defaultText="Home team..."
          name="homeTeamId"
          onChange={this.handleChange}
        />
        <TeamsDropdown
          teams={this.state.teams}
          defaultText="Away team..."
          name="awayTeamId"
          onChange={this.handleChange}
        />
        <button className="button-submit">Add fixture</button>
      </form>
    );
  }
}

export default FixtureForm;
