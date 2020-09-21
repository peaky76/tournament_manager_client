import React from "react";

import PersonDetails from "../components/PersonDetails";
import ScoreEventsList from "../components/lists/ScoreEventsList";

const PersonDisplay = ({ person }) => {
  return (
    <>
      <header>
        <h1>
          {person.firstName} {person.lastName}
        </h1>
      </header>
      <div id="content-wrapper">
        <PersonDetails person={person} />
        <ScoreEventsList scoreEvents={null} />
      </div>
    </>
  );
};

export default PersonDisplay;
