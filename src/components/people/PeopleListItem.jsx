import React from "react";

const PeopleListItem = ({ person, onClick }) => {
  return (
    <li onClick={() => onClick(person.id)}>
      {person.id}: {person.firstName} {person.lastName}
    </li>
  );
};

export default PeopleListItem;
