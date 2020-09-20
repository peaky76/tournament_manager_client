import React from "react";

const VenueContainer = ({ venue }) => {
  return (
    <>
      <header>
        <h1>{venue.name}</h1>
      </header>
      <div id="content-wrapper"></div>
    </>
  );
};

export default VenueContainer;
