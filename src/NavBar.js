import React from "react";

const NavBar = () => {
  return (
    <nav id="nav-main">
      <ul>
        <li class="nav-main-item">
          <a href="/leagues">Leagues</a>
        </li>
        <li class="nav-main-item">
          <a href="/teams">Teams</a>
        </li>
        <li class="nav-main-item">
          <a href="/players">Players</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
