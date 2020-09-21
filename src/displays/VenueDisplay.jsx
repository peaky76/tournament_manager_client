import React from "react";

const VenueDisplay = ({ venue }) => {
  return (
    <>
      <header>
        <h1>{venue.name}</h1>
      </header>
      <div id="content-wrapper"></div>
    </>
  );
};

export default VenueDisplay;
