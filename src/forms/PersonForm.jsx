import React, { Component } from "react";

class PersonForm extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        firstName: "",
        lastName: "",
        nationality: "",
        dateOfBirth: null,
      },
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
    this.props.handlePost(this.state.person);
  }

  render() {
    return (
      <form id="form-person-create" className="form-create" onSubmit={this.handleSubmit}>
        <div className="form-input-field">
          <label htmlFor="input-first-name">First name:</label>
          <input
            type="text"
            id="input-first-name"
            name="person.firstName"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-input-field">
          <label htmlFor="input-last-name">Last name:</label>
          <input
            type="text"
            id="input-last-name"
            name="person.lastName"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-input-field">
          <label htmlFor="select-nationality">Nationality:</label>
          <select id="select-nationality" name="person.nationality" onChange={this.handleChange}>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Scotland">Scotland</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Spain">Spain</option>
          </select>
        </div>
        <div className="form-input-field">
          <label htmlFor="input-dob">Date of birth:</label>
          <input
            type="date"
            id="input-dob"
            name="person.dateOfBirth"
            onChange={this.handleChange}
          />
        </div>
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default PersonForm;
