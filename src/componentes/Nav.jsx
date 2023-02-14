import React, { useState } from "react";
import "../Styles/Navbar.css";
const Navbar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Cerrar seccion
  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("currentUser");
    setUsername("");
    setPassword("");
    {
      window.location.href = "/";
    }
  };
  return (
    <nav className="navbar">
      <button onClick={handleLogOut}>Log Out</button>
      <div className="navbar-logo">
        <img
          src="src\assets\Logo.png"
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
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
