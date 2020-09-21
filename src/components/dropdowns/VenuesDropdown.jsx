import React, { Component } from "react";
import Request from "../../helpers/request";
import VenuesDropdownItem from "./VenuesDropdownItem";

class VenuesDropdown extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      selectedVenueID: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/venues").then((data) => {
      this.setState({ venues: data });
    });
  }

  handleSelect(id) {
    this.setState({
      selectedVenueId: id,
    });
  }

  render() {
    const options = this.state.venues.map((venue, index) => {
      return <VenuesDropdownItem key={index} item={venue} onSelect={this.handleSelect} />;
    });
    return <select>{options}</select>;
  }
}

export default VenuesDropdown;
