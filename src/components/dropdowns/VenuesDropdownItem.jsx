import React from "react";

const VenuesDropdownItem = ({ venue, onSelect }) => {
  return <li onSelect={() => onSelect(venue.id)}>{venue.name}</li>;
};

export default VenuesDropdownItem;
