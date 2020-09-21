import React, { Component } from "react";
import Request from "../../helpers/request";

class CountriesDropdown extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      selectedCountryId: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/countries").then((data) => {
      this.setState({ countries: data });
    });
  }

  handleChange(event) {
    this.setState({
      selectedCountryId: event.target.value,
    });
  }

  render() {
    const options = this.state.countries.map((country, index) => (
      <option key={index} value={country.id}>
        {country.name}
      </option>
    ));
    return <select onChange={this.handleChange}>{options}</select>;
  }
}

export default CountriesDropdown;
