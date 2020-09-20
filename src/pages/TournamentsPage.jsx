import React, { Component } from "react";
import { Link } from "react-router-dom";
import FixturesList from "../components/fixtures/FixturesList";
import TournamentHeader from "../components/tournaments/TournamentHeader";
import TournamentsList from "../components/tournaments/TournamentsList";
import TournamentTable from "../components/tournaments/TournamentTable";
import ResultsList from "../components/results/ResultsList";
import ScorersList from "../components/scorers/ScorersList";
import Request from "../helpers/request";

class TournamentPage extends Component {
  constructor() {
    super();
    this.state = {
      tournaments: [],
    };
  }

  componentDidMount() {
    const request = new Request();

    request.get("/api/tournaments").then((data) => {
      this.setState({ tournaments: data });
    });
  }

  render() {
    return (
      <div id="content-page" className="page">
        <header id="page-header-content" className="page-header">
          <TournamentHeader />
        </header>
        <section id="sidebar">
          <TournamentsList />
          <Link to="/tournaments/new">Add new</Link>
        </section>
        <section id="main-content">
          <TournamentTable />
          <ResultsList />
          <FixturesList />
          <ScorersList />
        </section>
      </div>
    );
  }
}

export default TournamentPage;
