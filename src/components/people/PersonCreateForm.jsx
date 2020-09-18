import React, { Component } from "react";

class PersonCreateForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      nationality: "",
      dateOfBirth: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form
        id="form-person-create"
        className="form-create"
        onSubmit={this.handleSubmit}
      >
        <div className="form-input-field">
          <label for="input-first-name">First name:</label>
          <input
            type="text"
            id="input-first-name"
            name="firstName"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-input-field">
          <label for="input-last-name">Last name:</label>
          <input
            type="text"
            id="input-last-name"
            name="lastName"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="form-input-field">
          <label for="select-nationality">Nationality:</label>
          <select
            id="select-nationality"
            name="nationality"
            onChange={this.handleChange}
          >
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Scotland">Scotland</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Spain">Spain</option>
          </select>
        </div>
        <div className="form-input-field">
          <label for="input-dob">Date of birth:</label>
          <input
            type="date"
            id="input-dob"
            name="dateOfBirth"
            onChange={this.handleChange}
          />
        </div>
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default PersonCreateForm;
