import React, { Component } from "react";
import Request from "../helpers/request";

import TeamsDropdown from "../components/dropdowns/TeamsDropdown";

class FixtureForm extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      // teams: [],
      // homeTeamId: "",
      // awayTeamId: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    let rawData = null;

    request.get("/api/tournaments/" + this.props.id).then((data) => {
      this.setState({ matches: data });
    });
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const homeTeam = this.state.teams.find((team) => team.id === parseInt(this.state.homeTeamId));
  //   const venueId = homeTeam.venue.id;
  //   const match = {
  //     team1: {
  //       id: this.state.homeTeamId,
  //     },
  //     team2: {
  //       id: this.state.awayTeamId,
  //     },
  //     venue: {
  //       id: venueId,
  //     },
  //     tournament: {
  //       id: this.props.id,
  //     },
  //   };

  //   const request = new Request();
  //   request
  //     .post("/api/team_matches", match)
  //     .then(() => (window.location = "/tournaments/" + this.props.id));
  // }

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
