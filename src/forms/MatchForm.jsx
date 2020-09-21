import React, { Component } from "react";
import VenuesDropdown from "../components/dropdowns/VenuesDropdown";

class MatchForm extends Component {
  constructor() {
    super();
    this.state = {
      team1: "",
      team2: "",
      score1: 0,
      score2: 0,
      venue: "",
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
      score1: this.state.score1,
      score2: this.state.score2,
      venue: this.state.venue,
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
          name="score1"
          value={this.state.score1}
          onChange={this.handleChange}
          placeholder="Score"
        ></input>
        <input
          type="text"
          name="team2"
          value={this.state.team2}
          onChange={this.handleChange}
          placeholder="Team B"
        ></input>
        <input
          type="text"
          name="score2"
          value={this.state.score2}
          onChange={this.handleChange}
          placeholder="Score"
        ></input>
        <VenuesDropdown />
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default MatchForm;
