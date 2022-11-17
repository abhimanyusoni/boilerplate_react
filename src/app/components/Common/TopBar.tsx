import React from "react";
import HeaderNotifications from "./HeaderNotifications";
import HeaderUserDropdown from "./HeaderUserDropdown";

const TopBar = () => {
  return (
    <div className="site_topbar">
      <div className="container">
        <div className="topbar_inner d-flex">
          <div className="right_menu d-flex ms-auto">
            <div>
              <HeaderUserDropdown />
            </div>
            <div className="ms-3">
              <HeaderNotifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
