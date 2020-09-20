import React from "react";
import DisplayListItem from "./DisplayListItem";

const DisplayList = ({ items, collection }) => {
  if (items.length === 0) {
    return (
      <section>
        <p>Nothing to list.</p>
      </section>
    );
  }

  const itemNodes = items.map((item, index) => {
    return <DisplayListItem key={index} item={item} collection={collection} />;
  });

  return (
    <section>
      <h2 className="component-header">ITEMS</h2>
      <ul>{itemNodes}</ul>
    </section>
  );
};

export default DisplayList;
