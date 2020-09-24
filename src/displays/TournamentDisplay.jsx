import React from "react";
import { Link } from "react-router-dom";

import FixturesList from "../components/lists/FixturesList";
import ResultsList from "../components/lists/ResultsList";
import LeagueTable from "../components/tournaments/LeagueTable";
import ScorersList from "../components/lists/ScorersList";

const TournamentDisplay = ({ tournament }) => {
  let results = null;
  let fixtures = null;
  if (tournament.matches) {
    results = tournament.matches.filter((match) => match.completed);
    fixtures = tournament.matches.filter((match) => !match.completed);
  }
  let resultsAddButton = (
    <button className="button-add">
      <Link to={"/tournaments/" + tournament.id + "/fixtures/edit"}>Add</Link>
    </button>
  );
  let fixturesAddButton = (
    <button className="button-add">
      <Link to={"/tournaments/" + tournament.id + "/fixtures/new"}>Add</Link>
    </button>
  );
  return (
    <>
      <header>
        <h1>{tournament.name}</h1>
      </header>
      <div id="content-wrapper">
        <LeagueTable id={tournament.id} />
        <ResultsList header="Results" button={resultsAddButton} matches={results} />
        <FixturesList header="Fixtures" button={fixturesAddButton} matches={fixtures} />
      </div>
    </>
  );
};

export default TournamentDisplay;
