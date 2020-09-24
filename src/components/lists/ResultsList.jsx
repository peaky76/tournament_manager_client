import React from "react";
import ResultsListItem from "./ResultsListItem";

const ResultsList = ({ header, button, matches }) => {
  let matchNodes = "No matches played.";
  if (matches) {
    matchNodes = matches.map((match, index) => {
      return <ResultsListItem key={index} match={match} />;
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

export default ResultsList;
