import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const alpha = "alpha";
  const beta = "beta";
  return (
    <nav id="nav-main">
      <ul>
        <li className="nav-main-item">
          <Link to="/tournaments">Tournaments</Link>
        </li>
        <li className="nav-main-item">
          <Link to="/teams">Teams</Link>
        </li>
        <li className="nav-main-item">
          <Link to="/people">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
