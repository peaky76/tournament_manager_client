import React from "react";

const PlayersList = ({ players }) => {
  if (!players) {
    return <section>No players registered.</section>;
  }
  return <section>There are some players to list.</section>;
};

export default PlayersList;
