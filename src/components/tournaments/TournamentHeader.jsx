import React from "react";

const TournamentHeader = ({ tournament }) => {
  return (
    <header>
      <h1>{tournament.name}</h1>
    </header>
  );
};

export default TournamentHeader;
