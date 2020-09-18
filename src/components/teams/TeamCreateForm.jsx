import React, { Component } from "react";

class TeamCreateForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shortName: "",
      homeVenue: null,
      players: [],
    };
  }
  render() {
    return (
      <form
        id="form-team-create"
        className="form-create"
        onSubmit={this.handleSubmit}
      >
        <div className="form-input-field">
          <label for="input-team-name">Name:</label>
          <input
            type="text"
            id="input-team-name"
            name="name"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-input-field">
          <label for="input-team-short-name">Short name:</label>
          <input
            type="text"
            id="input-team-short-name"
            name="shortName"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-input-field">
          <label for="input-home-venue">Home venue:</label>
          <select>
            <option value="Mercury Meadows">Mercury Meadows</option>
            <option value="Venus Park">Venus Park</option>
            <option value="Mars Moor">Mars Moor</option>
            <option value="Jupiter Dunes">Jupiter Dunes</option>
          </select>
        </div>
        <div className="form-input-field">{/* Drag and drop? */}</div>
      </form>
    );
  }
}

export default TeamCreateForm;
