import React from "react";

const DisplayListItem = ({ item, onClick }) => {
  return (
    <li onClick={() => onClick(item.id)}>
      {item.id}: {item.name}
    </li>
  );
};

export default DisplayListItem;
