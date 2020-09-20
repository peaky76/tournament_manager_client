import React from "react";

const PersonDetails = ({ person }) => {
  if (!person) {
    return <p>Loading...</p>;
  }
  return (
    <section className="component-display">
      <ul>
        <li>
          {person.firstName} {person.lastName}
        </li>
        <li>{person.nationality}</li>
        <li>{person.dateOfBirth}</li>
      </ul>
    </section>
  );
};

export default PersonDetails;
