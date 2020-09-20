import React, { Component } from "react";

class PersonForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      nationality: "",
      dateOfBirth: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.person) {
      this.setState({
        firstName: this.props.person.firstName,
        lastName: this.props.person.lastName,
        nationality: this.props.person.nationality,
        dateOfBirth: this.props.person.dateOfBirth,
      });
    }
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
      nationality: this.state.nationality,
      dateOfBirth: this.state.dateOfBirth,
    };
    this.props.handlePost(person);
  }

  render() {
    return (
      <form id="form-person-create" className="form-create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="First name"
        ></input>
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Last name"
        ></input>
        <input
          type="text"
          name="nationality"
          value={this.state.nationality}
          onChange={this.handleChange}
          placeholder="Nationality"
        ></input>
        <input type="date" id="input-dob" name="dateOfBirth" onChange={this.handleChange} />
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default PersonForm;
