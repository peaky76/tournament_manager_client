import React, { Component } from "react";
import FixturesList from "../components/fixtures/FixturesList";
import TournamentHeader from "../components/tournaments/TournamentHeader";
import TournamentsList from "../components/tournaments/TournamentsList";
import TournamentTable from "../components/tournaments/TournamentTable";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";
import TournamentCreateForm from "../components/tournaments/TournamentCreateForm";

class TournamentContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <TournamentCreateForm />
        {/* <button class="button-add-new">Add new</button> */}
        {/* <TournamentHeader />
        <TournamentsList />
        <TournamentTable />
        <ResultsList />
        <FixturesList />
        <ScorersList /> */}
      </>
    );
  }
}

export default TournamentContainer;
