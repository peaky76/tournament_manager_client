import React, { Component } from "react";
import { Link } from "react-router-dom";
import FixturesList from "../components/fixtures/FixturesList";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";
import TeamHeader from "../components/teams/TeamHeader";
import TeamPeopleList from "../components/teams/TeamPeopleList";
import TeamsList from "../components/teams/TeamsList";

import Request from "../helpers/request";

class TeamPage extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    const request = new Request();

    request.get("http://localhost:8080/api/teams").then((data) => {
      this.setState({ teams: data });
    });
  }

  render() {
    return (
      <div id="content-page" className="page">
        <header id="page-header-content" className="page-header">
          <TeamHeader />
        </header>
        <section id="sidebar">
          <TeamsList teams={this.state.teams} />
          <Link to="/teams/new">Add new</Link>
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
