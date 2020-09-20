import React from "react";

const PeopleListItem = ({ person }) => {
  return (
    <li>
      {person.firstName} {person.lastName}
    </li>
  );
};

export default PeopleListItem;
