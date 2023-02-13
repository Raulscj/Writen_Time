import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="src\assets\Logo.png"
          alt="Logo"
          style={{ width: "100px", height: "100px" }}
        />
        <p>Written Time</p>
      </div>
      <form className="navbar-search">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </form>
    </nav>
  );
};

export default Navbar;
