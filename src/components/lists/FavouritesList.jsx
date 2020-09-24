import React from "react";
import { Link } from "react-router-dom";

const FavouritesList = () => {
  return (
    <section>
      <h3>Favourites</h3>
      <ul>
        <li>
          <Link to="/tournaments/1">Alphabet League</Link>
        </li>
        <li>
          <Link to="/tournaments/2">Codeclan Championship</Link>
        </li>
      </ul>
    </section>
  );
};

export default FavouritesList;
