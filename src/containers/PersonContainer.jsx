import React from "react";

import PersonForm from "../forms/PersonForm";
import PersonGoals from "../components/people/PersonGoals";

const PersonContainer = ({ person }) => {
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
        <PersonGoals />
      </div>
    </>
  );
};

export default PersonContainer;
