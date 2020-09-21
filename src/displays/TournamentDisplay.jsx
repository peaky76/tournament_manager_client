import React from "react";

import MatchesList from "../components/lists/MatchesList";
import LeagueTable from "../components/tournaments/LeagueTable";
import ScorersList from "../components/lists/ScorersList";

const TournamentDisplay = ({ tournament }) => {
  const scorers = ["Fred Bloggs", "Joe Bloggs"];
  return (
    <>
      <header>
        <h1>{tournament.name}</h1>
      </header>
      <div id="content-wrapper">
        <LeagueTable />
        <MatchesList header="Results" matches={tournament.matches} />
        <MatchesList header="Fixtures" matches={tournament.matches} />
        <ScorersList header="Top Scorers" scorers={scorers} />
      </div>
    </>
  );
};

export default TournamentDisplay;
