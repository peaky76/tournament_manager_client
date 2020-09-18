import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import FavouritesList from "../components/FavouritesList";
import NavBar from "../NavBar.js";
import PersonAddNewForm from "../components/people/PersonAddNewForm";
import PersonContainer from "../containers/PersonContainer";
import TeamContainer from "../containers/TeamContainer";
import TournamentContainer from "../containers/TournamentContainer";

class MainContainer extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <section id="sidebar">
            <NavBar />
            <FavouritesList />
          </section>
          <section id="main-content">
            <Switch>
              <Route path="/people" component={PersonContainer} />
              <Route path="/people/new" component={PersonAddNewForm} />
              <Route path="/teams" component={TeamContainer} />
              <Route path="/tournaments" component={TournamentContainer} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    );
  }
}

export default MainContainer;
