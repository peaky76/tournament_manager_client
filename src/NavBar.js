import React from "react";

const NavBar = () => {
  return (
    <nav id="nav-main">
      <ul>
        <li className="nav-main-item">
          <a href="/Tournaments">Tournaments</a>
        </li>
        <li className="nav-main-item">
          <a href="/teams">Teams</a>
        </li>
        <li className="nav-main-item">
          <a href="/people">People</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
