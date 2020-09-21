import React from "react";
import DisplayListItem from "./DisplayListItem";

const DisplayList = ({ collection, items, onClick }) => {
  const itemNodes = items.map((item, index) => {
    if (collection === "people") {
      const combinedName = item.lastName + ", " + item.firstName;
      return <DisplayListItem key={index} value={item.id} label={combinedName} onClick={onClick} />;
    }
    return <DisplayListItem key={index} value={item.id} label={item.name} onClick={onClick} />;
  });

  return <ul className="display-list">{itemNodes}</ul>;
};

export default DisplayList;
