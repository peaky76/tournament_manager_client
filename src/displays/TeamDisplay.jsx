import React from "react";

import MatchesList from "../components/lists/MatchesList";
import ScorersList from "../components/lists/ScorersList";
import PlayersList from "../components/lists/PlayersList";

const TeamDisplay = ({ team }) => {
  return (
    <>
      <header>
        <h1>{team.name}</h1>
        {/* <h2>{team.venue}</h2> */}
      </header>
      <div id="content-wrapper">
        <PlayersList players={team.players} />
        <MatchesList header="Results" matches={team.matches} />
        <MatchesList header="Fixtures" matches={team.matches} />
        <ScorersList header="Top Scorers" scorers={null} />
      </div>
    </>
  );
};

export default TeamDisplay;
