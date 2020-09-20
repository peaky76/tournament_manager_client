import React from "react";

const DisplayListItem = ({ item, onClick }) => {
  return (
    <li onClick={() => onClick(item.id)}>
      {item.id}
      {/* : {person.firstName} {person.lastName} */}
    </li>
  );
};

export default DisplayListItem;
