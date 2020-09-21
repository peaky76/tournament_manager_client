import React from "react";

const VenuesDropdownItem = ({ venue, onSelect }) => {
  return <option onSelect={() => onSelect(venue.id)}>Venue</option>;
};

export default VenuesDropdownItem;
