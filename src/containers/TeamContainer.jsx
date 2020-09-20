import React from "react";

import FixturesList from "../components/fixtures/FixturesList";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";
import TeamPeopleList from "../components/teams/TeamPeopleList";

const TeamContainer = ({ teams }) => {
  return (
    <>
      <TeamPeopleList />
      <ResultsList />
      <FixturesList />
      <ScorersList />
    </>
  );
};

export default TeamContainer;
