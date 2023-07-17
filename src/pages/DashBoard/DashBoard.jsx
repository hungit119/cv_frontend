import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import style from "./DashBoard.scss";
import classNames from "classnames/bind";

import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, Route, Routes } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import { ACCESS_TOKEN } from "../../constant";
import HomePage from "../HomePage/HomePage";
import NavLinkMenuItem from "../components/NavLinkMenuItem/NavLinkMenuItem";
const cx = classNames.bind(style);
export default function DashBoard() {
  const { collapseSidebar, toggleSidebar, broken, rtl } = useProSidebar();
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.reload();
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
    >
      <Sidebar
        style={{ height: "100vh", zIndex: "100000", border: "none" }}
        backgroundColor="rgb(38, 50, 77)"
        transitionDuration={800}
        collapsed={collapsed}
        collapsedWidth="0"
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0) return {};
            },
          }}
        >
          <div
            style={{ textAlign: "center" }}
            active
            className={cx("logo-wrapper")}
          >
            <img
              src={"https://jumbo.g-axon.work/images/logo.png"}
              alt=""
              className={cx("logo")}
            />
            <ReorderIcon
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              style={{ cursor: "pointer", color: "#ffffff" }}
            />
          </div>
          <div className={cx("home-item")}>MAIN</div>
          <NavLinkMenuItem path={"/"} text={"Home"} />
          <NavLinkMenuItem path={"/edit-cv"} text={"Edit cv"} />
          <NavLinkMenuItem path={"/new-cv"} text={"New cv"} />
          <NavLinkMenuItem path={"/my-cv"} text={"My cv"} />
          <div className={cx("home-item")}>PERSONAL</div>
          <NavLinkMenuItem path={"/profile"} text={"Profile"} />
          <div className={cx("home-item")}>OTHER</div>
          <NavLinkMenuItem path={"#"} text={"Logout"} />
        </Menu>
      </Sidebar>
      <div className={cx("header")}>
        <div className={cx("header-content")}>
          <div className={cx("header-left-content")}>
            <button
              className={cx("expand")}
              onClick={() => setCollapsed(!collapsed)}
            >
              <ReorderIcon />
              <span className={cx("expand-span")}></span>
            </button>
            <div className={cx("search")}>
              <div className={cx("search-icon-wrapper")}>
                <SearchIcon className={cx("search-icon")} />
              </div>
              <div className={cx("search-wrapper-input")}>
                <input
                  type="text"
                  className={cx("search-input")}
                  placeholder="Search anything"
                />
              </div>
            </div>
          </div>
          <div className={cx("avata-wrapper")}>
            <span className={cx("avata")}>
              <img
                src="https://jumbo.g-axon.work/images/avatar/avatar3.jpg"
                alt=""
                className={cx("avatar-image")}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
