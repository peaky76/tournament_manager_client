import React from "react";

const TournamentTable = () => {
  const columnTitles = ["", "W", "D", "L", "F", "A", "Pts"];
  const headings = columnTitles.map((col) => <span className="league-table-column">{col}</span>);
  return <section>{headings}</section>;
};

export default TournamentTable;
