import React from "react";
import DisplayListItem from "./DisplayListItem";

const DisplayList = ({ items, onClick }) => {
  const itemNodes = items.map((item, index) => {
    return <DisplayListItem key={index} item={item} onClick={onClick} />;
  });

  return <ul class="display-list">{itemNodes}</ul>;
};

export default DisplayList;
