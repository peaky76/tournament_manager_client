import React from "react";

import FixturesList from "../components/lists/FixturesList";
import ResultsList from "../components/lists/ResultsList";
import ScorersList from "../components/lists/ScorersList";
import PlayersList from "../components/lists/PlayersList";

const TeamDisplay = ({ team }) => {
  let results,
    fixtures = null;
  if (team.matches) {
    results = team.matches.filter((match) => match.isCompleted);
    fixtures = team.matches.filter((match) => !match.isCompleted);
  }
  return (
    <>
      <header>
        <h1>{team.name}</h1>
        {/* <h2>{team.venue}</h2> */}
      </header>
      <div id="content-wrapper">
        <PlayersList players={team.players} />
        <ResultsList header="Results" matches={results} />
        <FixturesList header="Fixtures" matches={fixtures} />
        <ScorersList header="Top Scorers" scorers={null} />
      </div>
    </>
  );
};

export default TeamDisplay;
