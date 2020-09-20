import React from "react";

const DisplayListItem = ({ item, onClick }) => {
  return <li onClick={() => onClick(item.id)}>{item.id}</li>;
};

export default DisplayListItem;
