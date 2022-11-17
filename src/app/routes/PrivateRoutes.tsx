import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Common/Header";
import UserForm from "../components/User/UserForm";
import AfterLogin from "../layouts/Private/AfterLogin";
import UserList from "../pages/userlist/UserList";
import PageNotFound from "./PageNotFound";

const PrivateRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <AfterLogin>
          <Routes>
            <Route
              path="/dashboard"
              element={<UserList moduleName="User List" />}
            />
            <Route path="/userform" element={<UserForm />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </AfterLogin>
      </BrowserRouter>
    </>
  );
};

export default PrivateRoutes;
