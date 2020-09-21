import React from "react";

import FixturesList from "../components/lists/FixturesList";
import ResultsList from "../components/lists/ResultsList";

const VenueDisplay = ({ venue }) => {
  return (
    <>
      <header>
        <h1>{venue.name}</h1>
      </header>
      <div id="content-wrapper">
        <ResultsList header="Recent Matches" matches={null} />
        <FixturesList header="Upcoming Fixtures" matches={null} />
      </div>
    </>
  );
};

export default VenueDisplay;
