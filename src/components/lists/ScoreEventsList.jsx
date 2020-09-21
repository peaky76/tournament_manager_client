import React from "react";
import ScoreEventsListItem from "./ScoreEventsListItem";

const ScoreEventsList = ({ header, scoreEvents }) => {
  if (!scoreEvents) {
    return (
      <section>
        <h3>{header}</h3>
        No scoring data.
      </section>
    );
  }
  const scoreEventNodes = scoreEvents.map((scoreEvent, index) => {
    return <ScoreEventsListItem key={index} scoreEvent={scoreEvent} />;
  });
  return (
    <section>
      <ul>
        <h3>{header}</h3>
        {scoreEventNodes}
      </ul>
    </section>
  );
};

export default ScoreEventsList;
