import React, { Component } from "react";

class ResultFormRow extends Component {
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
      score1: this.state.score1,
      score2: this.state.score2,
    };

    const request = new Request();
    request
      .post("/api/team_matches", match)
      .then(() => (window.location = "/tournaments/" + this.props.id));
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

export default ResultFormRow;
