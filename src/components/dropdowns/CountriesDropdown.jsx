import React, { Component } from "react";
import Request from "../../helpers/request";

class CountriesDropdown extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      // selectedCountryId: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/countries").then((data) => {
      this.setState({ countries: data });
    });
  }

  //   findItemById(id) {
  //     return this.state.itemList.find((item) => {
  //       return item.id === parseInt(id);
  //     });
  //   }

  handleChange(event) {
    //  this.setState({
    //    selectedCountryId: event.target.value,
    //  });
    this.props.onChange(event);
  }

  render() {
    const options = this.state.countries.map((country, index) => (
      <option key={index} value={country}>
        {country.name}
      </option>
    ));
    return (
      <select name="nationality" onChange={this.handleChange}>
        {options}
      </select>
    );
  }
}

export default CountriesDropdown;
