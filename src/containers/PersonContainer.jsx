import React from "react";

import PersonHeader from "../components/people/PersonHeader";
import PersonDetails from "../components/people/PersonDetails";
import PersonGoals from "../components/people/PersonGoals";

const PersonContainer = ({ person }) => {
  return (
    <>
      <PersonHeader person={person} />
      <div id="content-wrapper">
        {/* <PersonForm person={person} /> */}
        <PersonDetails person={person} />
        <PersonGoals />
      </div>
    </>
  );
};

export default PersonContainer;
