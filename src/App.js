import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import TeamsPage from "./pages/TeamsPage";
import SubmissionPage from "./pages/SubmissionPage";
import TournamentsPage from "./pages/TournamentsPage";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:object/new" component={SubmissionPage} />
          <Route exact path="/people" component={PeoplePage} />
          {/* <Route path="/people/:id" component={PersonPage} /> */}
          <Route exact path="/teams" component={TeamsPage} />
          {/* <Route path="/teams/:id" component={TeamPage} /> */}
          <Route exact path="/tournaments" component={TournamentsPage} />
          {/* <Route path="/tournaments/:id" component={TournamentPage} /> */}
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

/* <div>Icons made by <a href="https://www.flaticon.com/aut */
