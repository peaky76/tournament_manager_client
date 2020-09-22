import React, { Component } from "react";

import SportsDropdown from "../components/dropdowns/SportsDropdown";

class TournamentForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      sportId: "",
      ptsWin: 3,
      ptsDraw: 1,
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
      <form id="form-tournament-create" className="form-create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        ></input>
        <SportsDropdown onChange={this.handleChange} />
        <h4>League Settings</h4>
        <span>Points per win: </span>
        <input
          className="input-inline"
          type="number"
          min="0"
          max="10"
          name="ptsWin"
          value={this.state.ptsWin}
          onChange={this.handleChange}
          placeholder="Points per win"
        ></input>
        <span>Points per draw: </span>
        <input
          className="input-inline"
          type="number"
          min="0"
          max="10"
          name="ptsDraw"
          value={this.state.ptsDraw}
          onChange={this.handleChange}
          placeholder="Points per draw"
        ></input>
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default TournamentForm;
