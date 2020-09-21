import React from "react";
import MatchesListItem from "./MatchesListItem";

const MatchesList = ({ header, matches }) => {
  if (!matches) {
    return (
      <section>
        <h3>{header}</h3>
        No matches on database.
      </section>
    );
  }
  const matchNodes = matches.map((match, index) => {
    return <MatchesListItem key={index} match={match} />;
  });

  return (
    <section>
      <h3>{header}</h3>
      <ul>{matchNodes}</ul>
    </section>
  );
};

export default MatchesList;
