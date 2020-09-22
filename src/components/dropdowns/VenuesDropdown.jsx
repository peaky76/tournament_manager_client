import React, { Component } from "react";
import Request from "../../helpers/request";

class VenuesDropdown extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/venues").then((data) => {
      this.setState({ venues: data });
    });
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    const options = this.state.venues.map((venue, index) => (
      <option key={index} value={venue.id}>
        {venue.name}
      </option>
    ));
    return (
      <select name="venueId" onChange={this.handleChange}>
        <option disabled selected value>
          Select venue...
        </option>
        {options}
      </select>
    );
  }
}

export default VenuesDropdown;
