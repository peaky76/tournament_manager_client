import React, { Component } from "react";
import Request from "../helpers/request";
import Logo from "../components/Logo";
import ResultFormSub from "./ResultFormSub";

class ResultForm extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    const request = new Request();
    request.get("/api/tournaments/" + this.props.match.params.id).then((data) => {
      this.setState({
        matches: data.matches.filter((match) => {
          return !match.completed;
        }),
      });
    });
  }

  render() {
    let matchNodes = null;
    if (this.state.matches) {
      matchNodes = this.state.matches.map((match) => {
        return <ResultFormSub tournamentId={this.props.match.params.id} match={match} />;
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
