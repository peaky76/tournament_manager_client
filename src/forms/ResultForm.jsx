import React, { Component } from "react";
import Request from "../helpers/request";
import Logo from "../components/Logo";
import ResultFormRow from "./ResultFormRow";

class ResultForm extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      // teams: [],
      // homeTeamId: "",
      // awayTeamId: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/tournaments/" + this.props.match.params.id).then((data) => {
      this.setState({
        matches: data.matches.filter((match) => {
          return match.completed;
        }),
      });
    });
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const homeTeam = this.state.teams.find((team) => team.id === parseInt(this.state.homeTeamId));
  //   const venueId = homeTeam.venue.id;
  //   const match = {
  //     team1: {
  //       id: this.state.homeTeamId,
  //     },
  //     team2: {
  //       id: this.state.awayTeamId,
  //     },
  //     venue: {
  //       id: venueId,
  //     },
  //     tournament: {
  //       id: this.props.id,
  //     },
  //   };

  //   const request = new Request();
  //   request
  //     .post("/api/team_matches", match)
  //     .then(() => (window.location = "/tournaments/" + this.props.id));
  // }

  render() {
    let matchNodes = null;
    if (this.state.matches) {
      matchNodes = this.state.matches.map((match) => {
        return <ResultFormRow match={match} />;
      });
    }
    return (
      <div id="submission-page" className="page">
        <section id="sidebar">
          <Logo />
        </section>
        <section id="main">
          <h2>Add results</h2>
          {matchNodes}
        </section>
      </div>
    );
  }
}

export default ResultForm;
