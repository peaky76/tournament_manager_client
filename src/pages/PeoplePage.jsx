import React, { Component } from "react";
import { Link } from "react-router-dom";

import PersonDetails from "../components/people/PersonDetails";
import PersonGoals from "../components/people/PersonGoals";
import PersonHeader from "../components/people/PersonHeader";
import PeopleList from "../components/people/PeopleList";
import Request from "../helpers/request";

class PersonPage extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      selectedPersonId: 1,
    };
    this.findPersonById = this.findPersonById.bind(this);
    this.handlePersonSelect = this.handlePersonSelect.bind(this);
  }

  componentDidMount() {
    const request = new Request();

    request.get("http://localhost:8080/api/people").then((data) => {
      this.setState({ people: data });
    });
  }

  findPersonById(id) {
    return this.state.people.find((person) => {
      return person.id === parseInt(id);
    });
  }

  // handleDelete(id) {
  //   const request = new Request();
  //   const url = "http://localhost:8080/api/people/" + id;
  //   request.delete(url).then(() => {
  //     window.location = "/people";
  //   });
  // }

  handlePersonSelect(id) {
    this.setState({ selectedPersonId: id });
  }

  render() {
    // const person = this.findPersonById(this.props.match.params.id);
    return (
      <div id="content-page" className="page">
        <header id="page-header-content" className="page-header">
          <PersonHeader />
        </header>
        <section id="sidebar">
          <PeopleList people={this.state.people} onClick={this.handlePersonSelect} />
          <Link to="/people/new">Add new</Link>
        </section>
        <section id="main-content">
          <PersonDetails person={this.findPersonById(this.state.selectedPersonId)} />
          <PersonGoals />
        </section>
      </div>
    );
  }
}

export default PersonPage;
