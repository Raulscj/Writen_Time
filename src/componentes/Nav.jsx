import { React, useState } from "react";

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
      <div className="navbar-logo">
        <div className="logo">
          <img src="src\assets\Logo.png" alt="Logo" />
        </div>
        <p className="logo-text">Written Time</p>
      </div>
      <form className="navbar-search">
        <input type="text" placeholder="Buscar..." />
        <button className="primario">Buscar</button>
      </form>
      <button className="log-out" onClick={handleLogOut}>
        Log Out
      </button>
    </nav>
  );
};

export default Navbar;
