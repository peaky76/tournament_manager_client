import React, { Component } from "react";

class ResultFormRow extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSubmit(event) {
    event.preventDefault();
    const tournament = {
      name: this.state.name,
      sport: {
        id: this.state.sportId,
      },
    };
    this.props.handlePost(tournament);
  }

  render() {
    return (
      <form className="result-submission">
        <label>{this.props.match.team1.name}</label>
        <input type="number" className="input-inline" min="0"></input>
        <label>{this.props.match.team2.name}</label>
        <input type="number" className="input-inline" min="0"></input>
        <button className="button-submit">Save result</button>
      </form>
    );
  }
}

export default ResultFormRow;
