import React from "react";

const MatchDisplay = ({ match }) => {
  return (
    <>
      <header>
        {match.team1}: {match.score1}
        {match.team2}: {match.score2}
      </header>
      <div id="content-wrapper">Match details</div>
    </>
  );
};

export default MatchDisplay;
