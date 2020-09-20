import React from "react";

const PersonDetails = ({ person }) => {
  return (
    <section className="component-display">
      <ul>
        <li>Name: Fred Bloggs</li>
        <li>Nationality: Polish</li>
        <li>Date of Birth: 1/1/2000</li>
      </ul>
    </section>
  );
};

export default PersonDetails;
