import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import FavouritesList from "../components/FavouritesList";
import NavBar from "../NavBar.js";
import PersonContainer from "../containers/PersonContainer";
import TeamContainer from "../containers/TeamContainer";
import TournamentContainer from "../containers/TournamentContainer";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div id="homepage">
          <header id="homepage-header">
            <div id="logo">
              <img
                src="/images/soccer_icons/png/001-trophy.png"
                alt="Sportify logo"
              />
              <h1>Sportify</h1>
            </div>
            <h2>Tournament Management System</h2>
          </header>
          <section id="homepage-nav">
            <NavBar />
          </section>
          <section id="homepage-fav">
            <FavouritesList />
            <Switch>
              <Route path="/people" component={PersonContainer} />
              <Route path="/teams" component={TeamContainer} />
              <Route path="/tournaments" component={TournamentContainer} />
              {/* <Route component={ErrorPage} /> */}
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default HomePage;
