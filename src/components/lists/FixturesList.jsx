import React from "react";
import FixturesListItem from "./FixturesListItem";

const FixturesList = ({ header, button, matches }) => {
  let matchNodes = "No fixtures scheduled.";
  if (matches) {
    matchNodes = matches.map((match, index) => {
      return <FixturesListItem key={index} match={match} />;
    });
  }

  return (
    <section className="results-fixtures-lists">
      <h3>{header}</h3>
      <ul>{matchNodes}</ul>
      {button}
    </section>
  );
};

export default FixturesList;
