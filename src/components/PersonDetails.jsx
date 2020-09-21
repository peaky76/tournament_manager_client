import React from "react";

const PersonDetails = ({ person }) => {
  if (!person) {
    return <p>No data available.</p>;
  }
  return (
    <section>
      <ul>
        <li>{person.nationality}</li>
        <li>{person.dateOfBirth}</li>
      </ul>
    </section>
  );
};

export default PersonDetails;
