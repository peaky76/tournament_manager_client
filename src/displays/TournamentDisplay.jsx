import React from "react";
import { Link } from "react-router-dom";

import FixturesList from "../components/lists/FixturesList";
import ResultsList from "../components/lists/ResultsList";
import LeagueTable from "../components/tournaments/LeagueTable";
import ScorersList from "../components/lists/ScorersList";

const TournamentDisplay = ({ tournament }) => {
  const results = tournament.matches.filter((match) => match.completed);
  const fixtures = tournament.matches.filter((match) => !match.completed);
  let resultsAddButton = <button className="button-add">Add</button>;
  let fixturesAddButton = (
    <button className="button-add">
      <Link to="/fixtures/new">Add</Link>
    </button>
  );
  return (
    <>
      <header>
        <h1>{tournament.name}</h1>
      </header>
      <div id="content-wrapper">
        <LeagueTable />
        <ResultsList header="Results" matches={results} />
        <div>{resultsAddButton}</div>
        <FixturesList header="Fixtures" matches={fixtures} />
        <div>{fixturesAddButton}</div>
        <ScorersList header="Top Scorers" scorers={null} />
      </div>
    </>
  );
};

export default TournamentDisplay;
