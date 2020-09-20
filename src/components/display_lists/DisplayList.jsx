import React from "react";
import DisplayListItem from "./DisplayListItem";

const DisplayList = ({ items, onClick }) => {
  if (items.length === 0) {
    return (
      <section>
        <p>Nothing to list.</p>
      </section>
    );
  }

  const itemNodes = items.map((item, index) => {
    return <DisplayListItem key={index} item={item} onClick={onClick} />;
  });

  return (
    <section className="component-display">
      <h2 className="component-header">Items</h2>
      <ul>{itemNodes}</ul>
    </section>
  );
};

export default DisplayList;
