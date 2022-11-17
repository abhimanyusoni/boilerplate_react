import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import toast from "react-hot-toast";
import { handleLoginAuth } from "../../pages/login/redux/loginSlice";
import { useNavigate } from "react-router-dom";
import MtLogo from "../../assets/images/mt_logo.svg";
import MtSmall from "../../assets/images/mt_small.svg";
import { Link, NavLink } from "react-router-dom";
import { NavLinkProps, useLocation, useResolvedPath } from "react-router-dom";
import { Location, Path } from "history";
import {
  BiHome,
  BiUser,
  BiMoney,
  BiPhoneCall,
  BiSidebar,
  BiLogOut,
} from "react-icons/bi";
import MenuLink from "./MenuLink";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  type TMenuLinkProps = NavLinkProps & {
    isActive?: (location: Location, path: Path) => boolean;
  };

  const handleLogout = () => {
    toast.loading("Logging out...", {
      duration: 1000,
      position: "top-center",
    });
    setTimeout(() => {
      dispatch(handleLoginAuth(false));
      localStorage.clear();
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=" + new Date();
      }
      navigate("/");
    }, 1800);
  };

  const [sidebarClass, setSidebarClass] = useState("collapsed");
  const [menuName, setMenuName] = useState(false);

  const handleExpandSidebar = () => {
    if (sidebarClass === "expanded") {
      setSidebarClass("collapsed");
    } else {
      setSidebarClass("expanded");
    }
  };

  useEffect(() => {
    if (sidebarClass === "collapsed") {
      setMenuName(false);
    } else {
      setTimeout(() => {
        setMenuName(true);
      }, 200);
    }
  }, [sidebarClass]);

  return (
    <div className={`sidebar_main ${sidebarClass}`}>
      <div className="logo">
        <img src={menuName ? MtLogo : MtSmall} height={40} alt="" />
      </div>
      <div className="menu_one my-4">
        {/* <h4>Admin</h4> */}
        <div className="mt-4">
          <MenuLink to="/dashboard">
            <BiHome title="Home" size={22} style={{ marginRight: 18 }} />{" "}
            {menuName ? <span className="menu_title"> Home</span> : ""}
          </MenuLink>
          {/* <NavLink to="/" className="d-flex flex-nowrap align-items-center">
            <BiHome title="Home" size={22} style={{ marginRight: 18 }} />{" "}
            <span className="menu_title"> Home</span>
          </NavLink> */}
        </div>
        <div className="mt-4">
          <MenuLink to="/userform">
            <BiUser title="UserForm" size={22} style={{ marginRight: 18 }} />{" "}
            {menuName ? <span className="menu_title"> Create User</span> : ""}
          </MenuLink>
          {/* <NavLink to="/" className="d-flex flex-nowrap align-items-center">
            <BiUser title="About" size={22} style={{ marginRight: 18 }} />{" "}
            <span className="menu_title"> About</span>
          </NavLink> */}
        </div>
        <div className="mt-4">
          <MenuLink to="/pricing">
            <BiMoney title="Pricing" size={22} style={{ marginRight: 18 }} />{" "}
            {menuName ? <span className="menu_title"> Pricing </span> : ""}
          </MenuLink>
          {/* <NavLink to="/" className="d-flex flex-nowrap align-items-center">
            <BiMoney title="Pricing" size={22} style={{ marginRight: 18 }} />{" "}
            <span className="menu_title"> Pricing </span>
          </NavLink> */}
        </div>
        <div className="mt-4">
          <MenuLink to="/contact">
            <BiPhoneCall
              title="Contact"
              size={22}
              style={{ marginRight: 18 }}
            />{" "}
            {menuName ? <span className="menu_title"> Contact</span> : ""}
          </MenuLink>
          {/* <NavLink to="/" className="d-flex flex-nowrap align-items-center">
            <BiPhoneCall
              title="Contact"
              size={22}
              style={{ marginRight: 18 }}
            />{" "}
            <span className="menu_title"> Contact</span>
          </NavLink> */}
        </div>
      </div>
      <button
        className="btn btn-danger logout_btn"
        type="submit"
        onClick={() => handleLogout()}
      >
        <BiLogOut title="Logout" size={22} style={{ marginRight: 18 }} />{" "}
        {menuName ? <span className="menu_title"> Logout </span> : ""}
      </button>

      <button
        title={sidebarClass === "collapsed" ? "expand" : "collapse"}
        className="expand_sidebar"
        onClick={handleExpandSidebar}
      >
        <BiSidebar color="#fff" />
      </button>
    </div>
  );
};

export default Header;
