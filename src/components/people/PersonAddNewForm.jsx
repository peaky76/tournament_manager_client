import React, { Component } from "react";

class PersonAddNewForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      nationality: "",
      dateOfBirth: null,
    };
  }
  render() {
    return (
      <form>
        <label for="input-first-name">First name:</label>
        <input type="text" id="input-first-name" name="firstName"></input>

        <label for="input-last-name">Last name:</label>
        <input type="text" id="input-last-name" name="lastname"></input>

        <label for="select-nationality">Nationality:</label>
        <select id="select-nationality" name="nationality">
          <option value="England">England</option>
          <option value="France">France</option>
          <option value="Scotland">Scotland</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Spain">Spain</option>
        </select>

        <label for="input-dob"></label>
        <input type="date" id="input-dob" name="dateOfBirth" />
      </form>
    );
  }
}

export default PersonAddNewForm;
