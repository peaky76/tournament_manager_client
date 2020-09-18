import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PersonCreateForm from "./components/people/PersonCreateForm";
import PersonPage from "./pages/PersonPage";
import TeamCreateForm from "./components/teams/TeamCreateForm";
import TeamPage from "./pages/TeamPage";
import TournamentCreateForm from "./components/tournaments/TournamentCreateForm";
import TournamentPage from "./pages/TournamentPage";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/people" component={PersonPage} />
          <Route exact path="/people/new" component={PersonCreateForm} />
          <Route path="/people/:id" component={PersonPage} />
          <Route exact path="/teams" component={TeamPage} />
          <Route exact path="/teams/new" component={TeamCreateForm} />
          <Route path="/teams/:id" component={TeamPage} />
          <Route exact path="/tournaments" component={TournamentPage} />
          <Route exact path="/tournaments/new" component={TournamentCreateForm} />
          <Route path="/tournaments/:id" component={TournamentPage} />
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

/* <div>Icons made by <a href="https://www.flaticon.com/aut */
