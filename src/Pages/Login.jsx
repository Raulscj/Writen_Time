import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faRightToBracket,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      if (userExists.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(userExists));
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Clave incorrecta. Por favor intenta de nuevo.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "El nombre de usuario no existe, intenta con otro.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setUsername("");
    setPassword("");
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "El nombre de usuario ya existe, intenta con otro",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setUsers([...users, { username, password }]);
      /* Almacena cada usuario como objetos dentro de una base de datos*/
      localStorage.setItem(
        "users",
        JSON.stringify([...users, { username, password }])
      );
      /* Almacena temporalmente al usuario que esta conectado */
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ username, password })
      );
    }
    setUsername("");
    setPassword("");
  };
  const handleLogOut = () => {
    localStorage.removeItem("currentUser");
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };
  //Renderizado
  return (
    <div className="login-container">
      {/* En caso de no haber usuario conectado */}
      {!localStorage.getItem("currentUser") && (
        <form>
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faUser} />
              Nombre de Usuario:
            </label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              
            />
          </div>
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faLock} />
              Contraseña:
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              
            />
          </div>
          <button onClick={handleSubmit}>
            <FontAwesomeIcon icon={faRightToBracket} />
            Iniciar sesión
          </button>
          <button onClick={handleSignUp}>
            <FontAwesomeIcon icon={faCashRegister} />
            Registrarse
          </button>
        </form>
      )}
      {/* En caso de iniciar */}
      {localStorage.getItem("currentUser") ? (
        <div>
          <h1>
            Bienvenido a WRITTEN TIME,{" "}
            {JSON.parse(localStorage.getItem("currentUser")).username}!
            {(window.location.href = "/Home")}
          </h1>
          {/* <button onClick={handleLogOut}>Log Out</button> */}
        </div>
      ) : null}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
