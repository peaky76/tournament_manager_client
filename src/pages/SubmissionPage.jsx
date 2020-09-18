import React, { Component } from "react";
import { useLocation } from "react-router-dom";

import PersonCreateForm from "../components/people/PersonCreateForm";
import TeamCreateForm from "../components/teams/TeamCreateForm";
import TournamentCreateForm from "../components/tournaments/TournamentCreateForm";

class SubmissionPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let newObject = this.props.match.params.object;
    let form;
    if (newObject === "tournaments") {
      form = <TournamentCreateForm />;
    }
    if (newObject === "people") {
      form = <PersonCreateForm />;
    }
    if (newObject === "teams") {
      form = <TeamCreateForm />;
    }
    return (
      <div id="submission-page" className="page">
        <header id="page-header-submission" class="page-header">
          <h2>Add new...</h2>
        </header>
        {form}
      </div>
    );
  }
}

export default SubmissionPage;
