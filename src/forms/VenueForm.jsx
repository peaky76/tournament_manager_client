import React, { Component } from "react";

class VenueForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
    const venue = {
      name: this.state.name,
    };
    this.props.handlePost(venue);
  }

  render() {
    return (
      <form id="form-venue-create" className="form-create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        ></input>
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default VenueForm;
