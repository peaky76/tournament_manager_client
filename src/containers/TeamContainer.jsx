import React, { Component } from "react";
import FixturesList from "../components/fixtures/FixturesList";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";
import TeamHeader from "../components/teams/TeamHeader";
import TeamPlayersList from "../components/teams/TeamPlayersList";
import TeamsList from "../components/teams/TeamsList";

class TeamContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <TeamHeader />
        <TeamsList />
        <TeamPlayersList />
        <ResultsList />
        <FixturesList />
        <ScorersList />
      </>
    );
  }
}

export default TeamContainer;
