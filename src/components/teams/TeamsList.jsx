import React from "react";
import TeamsListItem from "./TeamsListItem";

const TeamsList = ({ teams }) => {
  return (
    <section>
      <ul>
        Teams
        {teams}
        <TeamsListItem />
      </ul>
    </section>
  );
};

export default TeamsList;
