import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import DisplayContainer from "./containers/DisplayContainer";
import SubmissionContainer from "./containers/SubmissionContainer";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tournaments/:id/:collection/edit/" component={SubmissionContainer} />
          <Route path="/tournaments/:id/:collection/new" component={SubmissionContainer} />
          <Route exact path="/:collection/new" component={SubmissionContainer} />
          <Route path="/:collection/:id" component={DisplayContainer} />
          <Route path="/:collection" component={DisplayContainer} />
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

/* <div>Icons made by <a href="https://www.flaticon.com/aut */
