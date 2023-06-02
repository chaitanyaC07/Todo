import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>Get ready for daily task</nav>

      <div className="header">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
      </div>
    </>
  );
};

export default Header;
