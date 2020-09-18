import React, { Component } from "react";
import PlayerDetails from "../components/players/PlayerDetails";
import PlayerGoals from "../components/players/PlayerGoals";
import PlayerHeader from "../components/players/PlayerHeader";
import PlayersList from "../components/players/PlayersList";

class PlayerContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <PlayerHeader />
        <PlayersList />
        <PlayerDetails />
        <PlayerGoals />
      </>
    );
  }
}

export default PlayerContainer;
