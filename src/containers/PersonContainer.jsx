import React, { Component } from "react";
import PersonDetails from "../components/people/PersonDetails";
import PersonGoals from "../components/people/PersonGoals";
import PersonHeader from "../components/people/PersonHeader";
import PeopleList from "../components/people/PeopleList";

class PersonContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <PersonHeader />
        <PeopleList />
        <PersonDetails />
        <PersonGoals />
      </>
    );
  }
}

export default PersonContainer;
