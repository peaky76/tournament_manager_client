import React from "react";
import ScorersListItem from "./ScorersListItem";

const ScorersList = () => {
  return (
    <section className="component-display">
      <ul>
        <h3>Scorers</h3>
        <ScorersListItem />
      </ul>
    </section>
  );
};

export default ScorersList;
