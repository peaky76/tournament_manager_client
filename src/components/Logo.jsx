import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div id="logo">
        <div id="logo-img">
          <h1 id="logo-txt">Sportify</h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
