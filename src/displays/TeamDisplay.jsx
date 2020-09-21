import React from "react";

import MatchesList from "../components/lists/MatchesList";
import ScorersList from "../components/lists/ScorersList";
import PlayersList from "../components/lists/PlayersList";

const TeamDisplay = ({ team }) => {
  return (
    <>
      <header>
        <h1>{team.name}</h1>
      </header>
      <div id="content-wrapper">
        <PlayersList players={team.players} />
        <MatchesList />
        <MatchesList />
        <ScorersList />
      </div>
    </>
  );
};

export default TeamDisplay;
