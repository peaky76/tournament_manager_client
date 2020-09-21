import React from "react";
import FixturesListItem from "./FixturesListItem";

const FixturesList = ({ header, matches }) => {
  let matchNodes = "No fixtures scheduled.";
  if (matches) {
    matchNodes = matches.map((match, index) => {
      return <FixturesListItem key={index} match={match} />;
    });
  }

  return (
    <section>
      <h3>{header}</h3>
      <ul>{matchNodes}</ul>
    </section>
  );
};

export default FixturesList;
