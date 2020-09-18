import React from "react";
import LeaguesListItem from "./LeaguesListItem";

const LeaguesList = () => {
  return (
    <section className="component-display">
      <ul>
        <LeagueListItem />
      </ul>
    </section>
  );
};

export default LeaguesList;
