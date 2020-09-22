import React, { Component } from "react";

import Request from "../helpers/request";

import Logo from "../components/Logo";
import FixtureForm from "../forms/FixtureForm";
import MatchForm from "../forms/MatchForm";
import PersonForm from "../forms/PersonForm";
import ScoreEventForm from "../forms/ScoreEventForm";
import TeamForm from "../forms/TeamForm";
import TournamentForm from "../forms/TournamentForm";
import VenueForm from "../forms/VenueForm";

class SubmissionPage extends Component {
  constructor() {
    super();
    this.state = {};
    this.handlePost = this.handlePost.bind(this);
  }

  getSingularOfCollection() {
    const collection = this.props.match.params.collection;
    if (collection === "people") {
      return "person";
    }
    if (collection === "matches") {
      return "match";
    }
    return collection
      .split("")
      .slice(0, collection.length - 1)
      .join("");
  }

  handlePost(item) {
    const request = new Request();
    console.log(item);
    request.post("/api/" + this.props.match.params.collection, item)
    .then(() => (window.location = "/" + this.props.match.params.collection));
  }

  render() {
    let collection = this.props.match.params.collection;
    let singular = this.getSingularOfCollection();
    let form;
    if (collection === "fixtures") {
      form = <FixtureForm handlePost={this.handlePost} />;
    }
    if (collection === "people") {
      form = <PersonForm handlePost={this.handlePost} />;
    }
    if (collection === "teams") {
      form = <TeamForm handlePost={this.handlePost} />;
    }
    if (collection === "tournaments") {
      form = <TournamentForm handlePost={this.handlePost} />;
    }
    if (collection === "venues") {
      form = <VenueForm handlePost={this.handlePost} />;
    }
    return (
      <div id="submission-page" className="page">
        <section id="sidebar">
          <Logo />
        </section>
        <section id="main">
          <h2>Add new {singular}</h2>
          {form}
        </section>
      </div>
    );
  }
}

export default SubmissionPage;
