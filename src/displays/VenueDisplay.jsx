import React from "react";
import MatchesList from "../components/lists/MatchesList";

const VenueDisplay = ({ venue }) => {
  return (
    <>
      <header>
        <h1>{venue.name}</h1>
      </header>
      <div id="content-wrapper">
        <MatchesList header="Recent Matches" matches={null} />
        <MatchesList header="Upcoming Fixtures" matches={null} />
      </div>
    </>
  );
};

export default VenueDisplay;
