import React, { Component } from "react";
import Request from "../helpers/request";

class ResultFormSub extends Component {
  constructor() {
    super();
    this.state = {
      score1: "",
      score2: "",
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

    const match = {
      id: this.props.match.id,
      team1: {
        id: this.props.match.team1.id,
      },
      team2: {
        id: this.props.match.team2.id,
      },
      score1: this.state.score1,
      score2: this.state.score2,
      venue: {
        id: this.props.match.venue.id,
      },
      tournament: {
        id: this.props.tournamentId,
      },
    };

    const request = new Request();
    request
      .edit("/api/team_matches/" + this.props.match.id, match)
      .then(() => (window.location = "/tournaments/" + this.props.tournamentId));
  }

  render() {
    return (
      <form className="result-submission" onSubmit={this.handleSubmit}>
        <label>{this.props.match.team1.name}</label>
        <input
          type="number"
          className="input-inline"
          min="0"
          name="score1"
          onChange={this.handleChange}
        ></input>
        <label>{this.props.match.team2.name}</label>
        <input
          type="number"
          className="input-inline"
          min="0"
          name="score2"
          onChange={this.handleChange}
        ></input>
        <button className="button-submit">Save result</button>
      </form>
    );
  }
}

export default ResultFormSub;
