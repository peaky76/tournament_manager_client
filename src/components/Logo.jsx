import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div id="logo">
        <h1 id="logo-txt">Sportify</h1>
      </div>
    </Link>
  );
};

export default Logo;
