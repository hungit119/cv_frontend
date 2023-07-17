import React from "react";
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
import { NavLink, Route, Routes } from "react-router-dom";
import { ACCESS_TOKEN } from "../../constant";
import HomePage from "../HomePage/HomePage";
const cx = classNames.bind(style);
export default function DashBoard() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.reload();
  };
  return (
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
    >
      <Sidebar
        style={{ height: "100vh" }}
        backgroundColor="#ffffff"
        rtl={false}
        transitionDuration={800}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: "#40484F",
                  fontWeight: "500",
                  ":hover": {
                    transition: "all 0.2s ease-in-out",
                    backgroundColor: "#434CE7",
                    color: "#ffffff",
                    borderTopLeftRadius: "15px",
                    borderBottomLeftRadius: "15px",
                  },
                };
            },
          }}
        >
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>
              YourCV <WorkIcon style={{ marginTop: "2px" }} />{" "}
            </h2>
          </MenuItem>
          <NavLink to={"/"}>
            <MenuItem icon={<HomeIcon />}>Home</MenuItem>
          </NavLink>
          <NavLink to={"/my-cv"}>
            <MenuItem icon={<InventoryIcon />}>My CV</MenuItem>
          </NavLink>
          <NavLink to={"/edit-cv"}>
            <MenuItem icon={<EditIcon />}>Edit CV</MenuItem>
          </NavLink>
          <NavLink to={"/profile"}>
            <MenuItem icon={<PersonIcon />}>Profile</MenuItem>
          </NavLink>
          <MenuItem icon={<LogoutIcon />} onClick={handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
