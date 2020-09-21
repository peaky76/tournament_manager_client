import React from "react";
import ResultsListItem from "./ResultsListItem";

const ResultsList = ({ header, matches }) => {
  let matchNodes = "No matches played.";
  if (matches) {
    matchNodes = matches.map((match, index) => {
      return <ResultsListItem key={index} match={match} />;
    });
  }
  return (
    <section>
      <h3>{header}</h3>
      <ul>{matchNodes}</ul>
    </section>
  );
};

export default ResultsList;
