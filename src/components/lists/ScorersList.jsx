import React from "react";
import ScorersListItem from "./ScorersListItem";

const ScorersList = ({ header, scorers }) => {
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
