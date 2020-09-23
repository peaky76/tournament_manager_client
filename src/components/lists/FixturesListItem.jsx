import React from "react";
const FixturesListItem = ({match}) => {
return <li>{match.team1.name} v {match.team2.name}</li>;
};

export default FixturesListItem;
