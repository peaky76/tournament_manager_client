import React, { Component } from "react";
import CountriesDropdown from "../components/dropdowns/CountriesDropdown";

class PersonForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      countryId: "",
      dateOfBirth: null,
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
    const person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dateOfBirth: this.state.dateOfBirth,
      nationality: {
        id: this.state.countryId,
      },
    };
    this.props.handlePost(person);
  }

  render() {
    return (
      <form id="form-person-create" className="form-create" onSubmit={this.handleSubmit}>
        <input
          id="first-name"
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="First name"
        ></input>
        <input
          id="last-name"
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Last name"
        ></input>
        <CountriesDropdown onChange={this.handleChange} />
        <input type="date" id="input-dob" name="dateOfBirth" onChange={this.handleChange} />
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default PersonForm;
