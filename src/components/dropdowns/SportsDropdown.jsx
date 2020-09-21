import React, { Component } from "react";

class SportsDropdown extends Component {
  constructor() {
    super();
    this.state = {
      sports: ["Football", "Rugby League", "Rugby Union", "Basketball", "Ice Hockey"],
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    //  this.props.handleChange(event);
  }

  render() {
    const options = this.state.sports.map((sport, index) => (
      <option key={index} value={sport}>
        {sport}
      </option>
    ));
    return <select onChange={this.handleSelect}>{options}</select>;
  }
}

export default SportsDropdown;
