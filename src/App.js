import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DisplayPage from "./pages/DisplayPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import SubmissionPage from "./pages/SubmissionPage";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:collection/new" component={SubmissionPage} />
          <Route path="/:collection/:id" component={DisplayPage} />
          <Route path="/:collection" component={DisplayPage} />
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

/* <div>Icons made by <a href="https://www.flaticon.com/aut */
