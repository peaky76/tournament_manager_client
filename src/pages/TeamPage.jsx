import React, { Component } from "react";
import FixturesList from "../components/fixtures/FixturesList";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";
import TeamHeader from "../components/teams/TeamHeader";
import TeamPeopleList from "../components/teams/TeamPeopleList";
import TeamsList from "../components/teams/TeamsList";

class TeamPage extends Component {
  state = {};
  render() {
    return (
      <div id="content-page" className="page">
        <header id="page-header-content" class="page-header">
          <TeamHeader />
        </header>
        <section id="sidebar">
          <TeamsList />
          <button class="button-add-new">Add new</button>
        </section>
        <section id="main-content">
          <TeamPeopleList />
          <ResultsList />
          <FixturesList />
          <ScorersList />
        </section>
      </div>
    );
  }
}

export default TeamPage;
