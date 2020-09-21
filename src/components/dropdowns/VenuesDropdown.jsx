import React, { Component } from "react";
import Request from "../../helpers/request";

class VenuesDropdown extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      selectedVenueId: "",
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
    this.setState({
      selectedVenueId: event.target.value,
    });
    this.props.onChange(event);
  }

  render() {
    const options = this.state.venues.map((venue, index) => (
      <option key={index} value={venue.id}>
        {venue.name}
      </option>
    ));
    return (
      <select name="venue" onChange={this.handleChange}>
        {options}
      </select>
    );
  }
}

export default VenuesDropdown;
