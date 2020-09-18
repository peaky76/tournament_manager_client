import React, { Component } from "react";
import { Link } from "react-router-dom";

import PersonDetails from "../components/people/PersonDetails";
import PersonGoals from "../components/people/PersonGoals";
import PersonHeader from "../components/people/PersonHeader";
import PeopleList from "../components/people/PeopleList";

class PersonContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <button class="button-add-new">
          <Link to="/tournaments">Add new</Link>
        </button>
        {/* <PersonHeader />
        <PeopleList />
        <PersonDetails />
        <PersonGoals /> */}
      </>
    );
  }
}

export default PersonContainer;
