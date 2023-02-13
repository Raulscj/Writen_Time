import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Login.css";
import AppRoutes from "./componentes/AppRoutes";
/* import App from "./App"; */
import { PostContextProvider } from "./context/PostContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostContextProvider>
      <AppRoutes />
    </PostContextProvider>
  </React.StrictMode>
);
