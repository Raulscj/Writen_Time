import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Login.css";
import App from "./App";
import { PostContextProvider } from "./context/PostContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>
);
