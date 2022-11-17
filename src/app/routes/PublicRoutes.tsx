import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeforeLogin from "../layouts/Public/BeforeLogin";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MissingRoute from "./MissingRoutes";

const PublicRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <BeforeLogin>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="*" element={<MissingRoute />} /> */}
          </Routes>
        </BeforeLogin>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;
