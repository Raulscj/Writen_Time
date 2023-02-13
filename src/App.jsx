import Navbar from "./componentes/Nav";
import PostForm from "./componentes/PostForm";
import PostList from "./componentes/PostList";
import React, { useState } from "react";
import "./App.css";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Cerrar seccion
  const handleLogOut = () => {
    event.preventDefault();
    localStorage.removeItem("currentUser");
    setUsername("");
    setPassword("");
    {
      window.location.href = "/";
    }
  };
  //RENDERIZADO
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>
      <aside>
        <PostForm />
      </aside>
      <section>
        <PostList />
      </section>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
export default App;
