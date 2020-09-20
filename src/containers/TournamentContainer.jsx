import React from "react";

import FixturesList from "../components/fixtures/FixturesList";
import TournamentTable from "../components/tournaments/TournamentTable";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";

const TournamentContainer = () => {
  return (
    <>
      <TournamentTable />
      <ResultsList />
      <FixturesList />
      <ScorersList />
    </>
  );
};

export default TournamentContainer;
