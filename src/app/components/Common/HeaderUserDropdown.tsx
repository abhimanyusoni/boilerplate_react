import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BiUserCircle } from "react-icons/bi";

const HeaderUserDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        title="User profile"
        id="dropdown-basic"
        className="user_dropdown"
      >
        <span className="me-3">Abhimanyu Soni</span> <BiUserCircle size={28} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HeaderUserDropdown;
