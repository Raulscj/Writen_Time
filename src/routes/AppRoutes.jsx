import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/Login";
import Home from "../Pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
