import React, { Component } from "react";
import Select from "react-select";

class SportsDropdown extends Component {
  constructor() {
    super();
    this.state = {
      sports: ["Football", "Rugby League", "Rugby Union", "Basketball", "Ice Hockey"],
      selectedSport: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      selectedSport: event.target.value,
    });
  }

  render() {
    const options = this.state.sports.map((sport, index) => (
      <option key={index} value={sport}>
        {sport}
      </option>
    ));
    return <select onChange={this.handleChange}>{options}</select>;
  }
}

export default SportsDropdown;
