import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PersonPage from "./pages/PersonPage";
import TeamPage from "./pages/TeamPage";
import SubmissionPage from "./pages/SubmissionPage";
import TournamentPage from "./pages/TournamentPage";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/people" component={PersonPage} />
          <Route exact path="/:object/new" component={SubmissionPage} />
          <Route path="/people/:id" component={PersonPage} />
          <Route exact path="/teams" component={TeamPage} />
          {/* <Route exact path="/teams/new" component={SubmissionPage} /> */}
          <Route path="/teams/:id" component={TeamPage} />
          <Route exact path="/tournaments" component={TournamentPage} />
          {/* <Route exact path="/tournaments/new" component={SubmissionPage} /> */}
          <Route path="/tournaments/:id" component={TournamentPage} />
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

/* <div>Icons made by <a href="https://www.flaticon.com/aut */
