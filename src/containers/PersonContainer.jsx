import React, { Component } from "react";
import { Link } from "react-router-dom";

import PersonDetails from "../components/people/PersonDetails";
import PersonGoals from "../components/people/PersonGoals";
import PersonHeader from "../components/people/PersonHeader";
import PeopleList from "../components/people/PeopleList";
import PersonCreateForm from "../components/people/PersonCreateForm";

class PersonContainer extends Component {
  state = {};
  render() {
    return (
      <>
        {/* <button class="button-add-new">
          <Link to="/people/new">Add new</Link>
        </button> */}
        <PersonCreateForm />
        {/* <PersonHeader />
        <PeopleList />
        <PersonDetails />
        <PersonGoals /> */}
      </>
    );
  }
}

export default PersonContainer;
