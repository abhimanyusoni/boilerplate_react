import "./App.css";
import React, { useEffect, useState } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { setAuth, getAuth } from "./utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppSelector, useAppDispatch } from "./store/store";
import {
  fetchLoginStatus,
  handleLoginAuth,
} from "./pages/login/redux/loginSlice";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useAppDispatch();
  const userAuth = useAppSelector((state) => state.loginSlice.userAuth);
  useEffect(() => {
    dispatch(fetchLoginStatus());
  }, []);

  return (
    <div className="App">
      {userAuth.status ? <PrivateRoutes /> : <PublicRoutes />}
      <Toaster />
    </div>
  );
}

export default App;
