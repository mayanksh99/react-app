import React from "react";

//STF
const Navbar = ({ totalCounter }) => {
  console.log("Navbar");
  return (
    <nav className="navbar navbar-light bg-light mb-2">
      <div className="container">
        <span className="navbar-brand h1">Counter</span>
        <span className="badge badge-pill badge-secondary">{totalCounter}</span>
      </div>
    </nav>
  );
};

export default Navbar;
