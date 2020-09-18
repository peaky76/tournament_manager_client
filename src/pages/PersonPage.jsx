import React, { Component } from "react";
import { Link } from "react-router-dom";

import PersonDetails from "../components/people/PersonDetails";
import PersonGoals from "../components/people/PersonGoals";
import PersonHeader from "../components/people/PersonHeader";
import PeopleList from "../components/people/PeopleList";

class PersonPage extends Component {
  state = {};
  render() {
    return (
      <div id="content-page" className="page">
        <header id="page-header-content" class="page-header">
          <PersonHeader />
        </header>
        <section id="sidebar">
          <PeopleList />
          <button class="button-add-new">
            <Link to="/people/new">Add new</Link>
          </button>
        </section>
        <section id="main-content">
          <PersonDetails />
          <PersonGoals />
        </section>
      </div>
    );
  }
}

export default PersonPage;
