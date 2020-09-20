import React from "react";
import PeopleListItem from "./PeopleListItem";

const PeopleList = ({ people, onClick }) => {
  if (people.length === 0) {
    return (
      <section>
        <p>No people registered on database.</p>
      </section>
    );
  }

  const peopleNodes = people.map((person, index) => {
    return <PeopleListItem key={index} person={person} onClick={onClick} />;
  });

  return (
    <section className="component-display">
      <h2 className="component-header">People</h2>
      <ul>{peopleNodes}</ul>
    </section>
  );
};

export default PeopleList;
