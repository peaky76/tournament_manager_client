import React from "react";

import PersonForm from "../forms/PersonForm";
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
        <PersonForm person={person} />
        {/* <PersonDetails person={person} /> */}
        <ScoreEventsList scoreEvents={null} />
      </div>
    </>
  );
};

export default PersonDisplay;
