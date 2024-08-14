import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path={"/"} />
        <Route element={<ProfilePage />} path={"/profile"} />
        <Route element={<LoginPage />} path={"/auth/login"} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
