import React, { useState } from "react";

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
        setErrorMessage("Clave incorrecta. Por favor intenta de nuevo.");
      }
    } else {
      setErrorMessage("El nombre de usuario no existe, intenta con otro.");
    }
    setUsername("");
    setPassword("");
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      setErrorMessage("El nombre de usuario ya existe, intenta con otro");
    } else {
      setUsers([...users, { username, password }]);
      /* Almacena cada usuario como objetos dentro de un array */
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

  return (
    <div className="login-container">
      {/* En caso de no haber usuario conectado */}
      {!localStorage.getItem("currentUser") && (
        <form>
          <div className="form-group">
            <label>Nombre de Usuario:</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button onClick={handleSubmit}>Iniciar sesión</button>
          <button onClick={handleSignUp}>Registrarse</button>
        </form>
      )}
      {/* En caso de iniciar */}
      {localStorage.getItem("currentUser") ? (
        <div>
          <p>
            Bienvenido a WRITTEN TIME,{" "}
            {JSON.parse(localStorage.getItem("currentUser")).username}!
          </p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : null}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
