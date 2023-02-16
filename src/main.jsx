import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { PostContextProvider } from "./context/PostContext";
import "./assets/styles/General.css";
import "./assets/styles/Cards.css";
import "./assets/styles/Formulario.css";
import "./assets/styles/Navbar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostContextProvider>
      <AppRoutes />
    </PostContextProvider>
  </React.StrictMode>
);
