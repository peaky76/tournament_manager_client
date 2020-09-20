import React from "react";

import FixturesList from "../components/fixtures/FixturesList";
import TournamentTable from "../components/tournaments/TournamentTable";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";

const TournamentContainer = ({ tournament }) => {
  return (
    <>
      <header>
        <h1>{tournament.name}</h1>
      </header>
      <div id="content-wrapper">
        <TournamentTable />
        <ResultsList />
        <FixturesList />
        <ScorersList />
      </div>
    </>
  );
};

export default TournamentContainer;
