import React from "react";

const PersonHeader = ({ person }) => {
  return (
    <header>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
    </header>
  );
};

export default PersonHeader;
