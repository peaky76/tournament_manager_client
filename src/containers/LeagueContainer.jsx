import React, { Component } from "react";
import FixturesList from "../components/fixtures/FixturesList";
import LeagueHeader from "../components/leagues/LeagueHeader";
import LeaguesList from "../components/leagues/LeaguesList";
import LeagueTable from "../components/leagues/LeagueTable";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";

class LeagueContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <LeagueHeader />
        <LeaguesList />
        <LeagueTable />
        <ResultsList />
        <FixturesList />
        <ScorersList />
      </>
    );
  }
}

export default LeagueContainer;
