import React, { Component } from "react";

class ScoreEventForm extends Component {
  constructor() {
    super();
    this.state = {
      person: "",
      value: "",
      time: "",
      match: null,
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const scoreEvent = {
      person: this.state.person,
      value: this.state.value,
      time: this.state.time,
      match: this.state.match,
    };
    this.props.handlePost(scoreEvent);
  }

  render() {
    return (
      <form id="form-score-event-create" className="form-create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="person"
          value={this.state.person}
          onChange={this.handleChange}
          placeholder="Person"
        ></input>
        <input
          type="text"
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Value"
        ></input>
        <input
          type="text"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
          placeholder="Time"
        ></input>
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default ScoreEventForm;
