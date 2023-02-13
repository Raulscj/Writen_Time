import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/Login";
import Home from "../Pages/Home";
import EditPostPage from "../Pages/EditPostPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/edit/:id" element={<EditPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
