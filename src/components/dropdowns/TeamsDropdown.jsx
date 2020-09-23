import React from "react";

const TeamsDropdown = ({ teams, defaultText, name, onChange }) => {
  let options = <option></option>;
  if (teams) {
    options = teams.map((team, index) => (
      <option key={index} value={team.id}>
        {team.name}
      </option>
    ));
  }
  return (
    <select className="input-inline" name={name} onChange={onChange}>
      <option disabled selected value>
        {defaultText}
      </option>
      {options}
    </select>
  );
};

export default TeamsDropdown;
