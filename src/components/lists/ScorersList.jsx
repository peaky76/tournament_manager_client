import React from "react";
import ScorersListItem from "./ScorersListItem";

const ScorersList = ({ header, scorers }) => {
  if (!scorers) {
    return (
      <section>
        <h3>{header}</h3>
        No scorers on database.
      </section>
    );
  }
  const scorerNodes = scorers.map((scorer, index) => {
    return <ScorersListItem key={index} scorer={scorer} />;
  });
  return (
    <section>
      <ul>
        <h3>{header}</h3>
        {scorerNodes}
      </ul>
    </section>
  );
};

export default ScorersList;
