import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faRightToBracket,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";

function LoginPage() {
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

  //Renderizado
  return (
    <>
      {/* En caso de no haber usuario conectado */}
      {!localStorage.getItem("currentUser") && (
        <form className="login">
          <h1 className="text-center">Iniciar sesión</h1>
          <div className="input-group">
            <label htmlFor="usuario" className="input-label">
              <FontAwesomeIcon icon={faUser} />
              <span className="icon-text">Nombre de Usuario:</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="contraseña" className="input-label">
              <FontAwesomeIcon icon={faLock} />
              <span className="icon-text">Contraseña:</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button onClick={handleSignUp}>
            <FontAwesomeIcon icon={faCashRegister} />
            <span className="icon-text">Registrarse</span>
          </button>
          <button onClick={handleSubmit} className="primario">
            <FontAwesomeIcon icon={faRightToBracket} />
            <span className="icon-text">Iniciar sesión</span>
          </button>
        </form>
      )}
      {/* En caso de iniciar */}
      {localStorage.getItem("currentUser") ? (
        <div className="login">{(window.location.href = "/Home")}</div>
      ) : null}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
}

export default LoginPage;
