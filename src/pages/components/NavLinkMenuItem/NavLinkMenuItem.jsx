import React from "react";
import classNames from "classnames/bind";
import styles from "./NavLinkMenuItem.scss";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

const NavLinkMenuItem = ({ path, text, icon }) => {
  return (
    <div className={cx("navlink-wrapper")}>
      <NavLink
        to={path}
        className={(nav) => cx("navlink", nav.isActive ? "active" : "")}
        style={{ display: "flex", alignItems: "start" }}
      >
        <span style={{ fontSize: "10px", marginRight: "10px" }}>{icon}</span>{" "}
        <p>{text}</p>
      </NavLink>
    </div>
  );
};

export default NavLinkMenuItem;
