import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import HowToPlay from "../pages/HowToPlay";
import Login from "../pages/Login";
import Ranking from "../pages/Ranking";
import Register from "../pages/Register";
import Rules from "../pages/Rules";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/how-to-play" element={<HowToPlay />} />
    <Route path="/ranking" element={<Ranking />} />
    <Route path="/rules" element={<Rules />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default Routing;
