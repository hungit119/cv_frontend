import classNames from "classnames/bind";
import React, { useRef, useState } from "react";
import { Menu, Sidebar, useProSidebar } from "react-pro-sidebar";
import style from "./DashBoard.scss";

import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import { ACCESS_TOKEN } from "../../constant";
import NavLinkMenuItem from "../components/NavLinkMenuItem/NavLinkMenuItem";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import LowPriorityRoundedIcon from "@mui/icons-material/LowPriorityRounded";
import { Route, Routes } from "react-router-dom";
import FormCV from "../components/FormCV/FormCV";
const cx = classNames.bind(style);
export default function DashBoard() {
  const asideRef = useRef(null);
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.reload();
  };
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
    >
      <Sidebar
        ref={asideRef}
        style={{
          zIndex: "100000",
          border: "none",
          position: "fixed",
          bottom: "0",
          top: "0",
        }}
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
            <button
              className={cx("expand")}
              onClick={() => setCollapsed(!collapsed)}
            >
              <LowPriorityRoundedIcon />
              <span className={cx("expand-span")}></span>
            </button>
          </div>
          <div className={cx("home-item")}>MAIN</div>
          <NavLinkMenuItem
            path={"/"}
            text={"Home"}
            icon={<HomeRoundedIcon />}
          />
          <NavLinkMenuItem
            path={"/edit-cv"}
            text={"Edit cv"}
            icon={<ModeEditRoundedIcon />}
          />
          <NavLinkMenuItem
            path={"/new-cv"}
            text={"New cv"}
            icon={<AddBoxRoundedIcon />}
          />
          <NavLinkMenuItem
            path={"/my-cv"}
            text={"My cv"}
            icon={<ViewListRoundedIcon />}
          />
          <div className={cx("home-item")}>PERSONAL</div>
          <NavLinkMenuItem
            path={"/profile"}
            text={"Profile"}
            icon={<Person2RoundedIcon />}
          />
          <div className={cx("home-item")}>OTHER</div>
        </Menu>
      </Sidebar>
      <div
        className={cx("header")}
        style={{
          marginLeft: 250 - asideRef.current?.clientWidth,
          width: `calc(100% - ${250 - asideRef.current?.clientWidth}px) `,
        }}
      >
        <div className={cx("header-content")}>
          <div className={cx("header-left-content")}>
            {asideRef.current?.clientWidth === 0 ? (
              <></>
            ) : (
              <button
                className={cx("expand")}
                onClick={() => setCollapsed(!collapsed)}
              >
                <ReorderIcon />
                <span className={cx("expand-span")}></span>
              </button>
            )}
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
      <div
        className={cx("content")}
        style={{
          marginLeft: 250 - asideRef.current?.clientWidth,
          width: `calc(100% - ${250 - asideRef.current?.clientWidth}px) `,
        }}
      >
        <Routes>
          <Route path="/new-cv" element={<FormCV />} />
        </Routes>
      </div>
    </div>
  );
}
