import React, { Component } from "react";
import Request from "../../helpers/request";

class SportsDropdown extends Component {
  constructor() {
    super();
    this.state = {
      sports: [],
      selectedSportId: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/sports").then((data) => {
      this.setState({ sports: data });
    });
  }

  handleChange(event) {
    this.setState({
      selectedSportId: event.target.value,
    });
    this.props.onChange(event);
  }

  render() {
    const options = this.state.sports.map((sport, index) => (
      <option key={index} value={sport.id}>
        {sport.name}
      </option>
    ));
    return (
      <select name="sportId" onChange={this.handleChange}>
        {options}
      </select>
    );
  }
}

export default SportsDropdown;
