import React from "react";
const ResultsListItem = ({match}) => {
  return <li>{match.team1.name} {match.score1} - {match.team2.name} {match.score2}</li>;
};

export default ResultsListItem;
