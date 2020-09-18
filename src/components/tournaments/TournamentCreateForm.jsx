import React, { Component } from "react";

class TournamentCreateForm extends Component {
  constructor() {
    super();
    this.state = {
      sport: null,
      name: "",
      teams: [],
    };
  }
  render() {
    return (
      <form
        id="form-person-create"
        className="form-create"
        onSubmit={this.handleSubmit}
      >
        <div className="form-input-field">
          <label for="select-sport">Select sport:</label>
          <select id="select-sport" name="sport" onChange={this.handleChange}>
            <option value="Football">Football</option>
            <option value="Rugby League">Rugby League</option>
            <option value="Rugby Union">Rugby Union</option>
            <option value="Ice Hockey">Ice Hockey</option>
          </select>
        </div>
        <div className="form-input-field">
          <label for="input-tournament-name">Name:</label>
          <input
            type="text"
            id="input-tournament-name"
            name="name"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-input-field">{/* Drag & Drop? */}</div>
      </form>
    );
  }
}

export default TournamentCreateForm;
