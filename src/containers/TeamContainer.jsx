import React, { Component } from "react";
import FixturesList from "../components/fixtures/FixturesList";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";
import TeamCreateForm from "../components/teams/TeamCreateForm";
import TeamHeader from "../components/teams/TeamHeader";
import TeamPeopleList from "../components/teams/TeamPeopleList";
import TeamsList from "../components/teams/TeamsList";

class TeamContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <TeamCreateForm />
        {/* <button class="button-add-new">Add new</button> */}
        {/* <TeamHeader />
        <TeamsList />
        <TeamPeopleList />
        <ResultsList />
        <FixturesList />
        <ScorersList /> */}
      </>
    );
  }
}

export default TeamContainer;
