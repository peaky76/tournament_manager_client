import React from "react";
import FixturesListItem from "./FixturesListItem";

const FixturesList = () => {
  return (
    <section className="component-display">
      <ul>
        <h3>Fixtures</h3>
        <FixturesListItem />
      </ul>
    </section>
  );
};

export default FixturesList;
