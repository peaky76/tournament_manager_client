import React from "react";

import TournamentHeader from "../components/tournaments/TournamentHeader";
import FixturesList from "../components/fixtures/FixturesList";
import TournamentTable from "../components/tournaments/TournamentTable";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";

const TournamentContainer = ({ tournament }) => {
  return (
    <>
      <TournamentHeader tournament={tournament} />
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
