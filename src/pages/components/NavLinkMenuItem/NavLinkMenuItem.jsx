import React from "react";
import classNames from "classnames/bind";
import styles from "./NavLinkMenuItem.scss";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

const NavLinkMenuItem = ({ path, text }) => {
  return (
    <div className={cx("navlink-wrapper")}>
      <NavLink
        to={path}
        className={(nav) => cx("navlink", nav.isActive ? "active" : "")}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default NavLinkMenuItem;
