import React, { Component } from "react";
import Request from "../../helpers/request";

// import Select from "react-select";

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
  }

  render() {
    const options = this.state.venues.map((venue) => (
      <option key={venue.id} value={venue.id}>
        {venue.name}
      </option>
    ));
    return <select onChange={this.handleChange}>{options}</select>;
  }
}

export default VenuesDropdown;
