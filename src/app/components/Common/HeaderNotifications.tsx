import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BiBell, BiRightArrowCircle } from "react-icons/bi";

const HeaderNotifications = () => {
  return (
    <Dropdown className="notification_main">
      <Dropdown.Toggle
        title="Notifications"
        id="dropdown-basic"
        className="user_dropdown"
      >
        <BiBell size={28} />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: 300 }}>
        <h5 className="ps-3 noti_title">Notifications</h5>
        <Dropdown.Item href="#/action-1">
          <div className="d-flex align-items-center">
            <BiRightArrowCircle color="#dc3545" className="me-2" /> Action
          </div>
          <p className="noti_desc ps-4">
            Lorem Ipsum Notification Descriptions...
          </p>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1">
          <div className="d-flex align-items-center">
            <BiRightArrowCircle color="#dc3545" className="me-2" /> Action
          </div>
          <p className="noti_desc ps-4">
            Lorem Ipsum Notification Descriptions...
          </p>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1">
          <div className="d-flex align-items-center">
            <BiRightArrowCircle color="#dc3545" className="me-2" /> Action
          </div>
          <p className="noti_desc ps-4">
            Lorem Ipsum Notification Descriptions...
          </p>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1">
          <div className="d-flex align-items-center">
            <BiRightArrowCircle color="#dc3545" className="me-2" /> Action
          </div>
          <p className="noti_desc ps-4">
            Lorem Ipsum Notification Descriptions...
          </p>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HeaderNotifications;
