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
    };
    // this.findPersonById = this.findPersonById.bind(this);
  }

  componentDidMount() {
    const request = new Request();

    request.get("http://localhost:8080/api/people").then((data) => {
      this.setState({ people: data });
    });
  }

  // findPersonById(id) {
  //   return this.state.people.find((person) => {
  //     return person.id === parseInt(id);
  //   });
  // }

  // handleDelete(id) {
  //   const request = new Request();
  //   const url = "http://localhost:8080/api/people/" + id;
  //   request.delete(url).then(() => {
  //     window.location = "/people";
  //   });
  // }

  render() {
    // const person = this.findPersonById(this.props.match.params.id);
    return (
      <div id="content-page" className="page">
        <header id="page-header-content" className="page-header">
          <PersonHeader />
        </header>
        <section id="sidebar">
          <PeopleList people={this.state.people} />
          <Link to="/people/new">Add new</Link>
        </section>
        <section id="main-content">
          {/* <PersonDetails person={person} onDelete={this.handleDelete} /> */}
          <PersonDetails />
          <PersonGoals />
        </section>
      </div>
    );
  }
}

export default PersonPage;
