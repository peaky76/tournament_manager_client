import React, { Component } from "react";

class TeamForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shortName: "",
      venue: null,
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
    const team = {
      name: this.state.name,
      shortName: this.state.shortName,
      venue: this.state.venue,
    };
    this.props.handlePost(team);
  }

  render() {
    return (
      <form id="form-team-create" className="form-create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        ></input>
        <input
          type="text"
          name="shortName"
          value={this.state.shortName}
          onChange={this.handleChange}
          placeholder="Short name"
        ></input>
        <input
          type="text"
          name="venue"
          value={this.state.venue}
          onChange={this.handleChange}
          placeholder="Venue"
        ></input>
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default TeamForm;
