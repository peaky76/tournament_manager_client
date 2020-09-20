import React from "react";

import TeamHeader from "../components/teams/TeamHeader";
import FixturesList from "../components/fixtures/FixturesList";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";
import TeamPeopleList from "../components/teams/TeamPeopleList";

const TeamContainer = ({ team }) => {
  return (
    <>
      <TeamHeader team={team} />
      <div id="content-wrapper">
        <TeamPeopleList players={team.players} />
        <ResultsList />
        <FixturesList />
        <ScorersList />
      </div>
    </>
  );
};

export default TeamContainer;
