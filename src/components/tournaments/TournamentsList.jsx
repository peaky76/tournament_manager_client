import React from "react";
import TournamentsListItem from "./TournamentsListItem";

const TournamentsList = () => {
  return (
    <section className="component-display">
      <ul>
        <h3>Tournament List</h3>
        <TournamentsListItem />
      </ul>
    </section>
  );
};

export default TournamentsList;
