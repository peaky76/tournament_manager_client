import React from "react";

const DisplayListItem = ({ value, label, onClick }) => {
  return <li onClick={() => onClick(value)}>{label}</li>;
};

export default DisplayListItem;
