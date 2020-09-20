import React from "react";

const TeamHeader = ({ team }) => {
  return (
    <header>
      <h1>{team.name}</h1>
    </header>
  );
};

export default TeamHeader;
