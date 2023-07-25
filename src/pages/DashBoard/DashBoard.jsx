import classNames from "classnames/bind";
import React, { useEffect, useRef, useState } from "react";
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
import AvatarDefault from "../../access/avatar.jpg";
import { Link, Route, Routes } from "react-router-dom";
import FormCV from "../components/FormCV/FormCV";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import Profile from "../components/Profile/Profile";
import ChangePassword from "../components/ChangePassword/ChangePassword";
const cx = classNames.bind(style);
export default function DashBoard() {
  const asideRef = useRef(null);
  const [asideRefCurrent, setAsideRefCurrent] = useState(
    asideRef.current?.clientWidth || 250
  );
  const [collapsed, setCollapsed] = useState(true);
  const [inputSearchValue, setInputSearchValue] = useState("");

  const avatar = useSelector((state) => state.userReducer.user.avatar);
  const isLoading = useSelector((state) => state.processReducer.isLoading);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.reload();
  };
  const handleOnChangeInputSearch = (e) => {
    setInputSearchValue(e.target.value);
  };
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
              onClick={() => {
                setCollapsed(!collapsed);
                setAsideRefCurrent(asideRef.current?.clientWidth);
              }}
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
          <NavLinkMenuItem
            path={"/change-password"}
            text={"Change Password"}
            icon={<VpnKeyRoundedIcon />}
          />
        </Menu>
      </Sidebar>
      <div
        className={cx("header")}
        style={{
          marginLeft: 250 - asideRefCurrent,
          width: `calc(100% - ${250 - asideRefCurrent}px) `,
        }}
      >
        <div className={cx("header-content")}>
          <div className={cx("header-left-content")}>
            {asideRefCurrent === 0 ? (
              <></>
            ) : (
              <button
                className={cx("expand")}
                onClick={() => {
                  setCollapsed(!collapsed);
                  setAsideRefCurrent(asideRef.current?.clientWidth);
                }}
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
                  value={inputSearchValue}
                  onChange={handleOnChangeInputSearch}
                  name="keyword"
                />
              </div>
            </div>
          </div>
          <div className={cx("avatar-parent")}>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <div className={cx("avata-wrapper")}>
                <span className={cx("avata")}>
                  {!isLoading && (
                    <img
                      src={avatar ? avatar : AvatarDefault}
                      alt=""
                      className={cx("avatar-image")}
                    />
                  )}
                </span>
              </div>
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "right top",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <Link
                          to={"/profile"}
                          style={{
                            textDecoration: "none",
                            color: "currentcolor",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <PersonRoundedIcon
                              style={{ marginRight: "10px" }}
                            />
                            <span>Profile</span>
                          </MenuItem>
                        </Link>
                        <Link
                          to={"/change-password"}
                          style={{
                            textDecoration: "none",
                            color: "currentcolor",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <VpnKeyRoundedIcon
                              style={{ marginRight: "10px" }}
                            />
                            <span>Change Password</span>
                          </MenuItem>
                        </Link>
                        <MenuItem onClick={handleLogout}>
                          <ExitToAppRoundedIcon
                            style={{ marginRight: "10px" }}
                          />
                          <span>Logout</span>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      </div>
      <div
        className={cx("content")}
        style={{
          marginLeft: 250 - asideRefCurrent,
          width: `calc(100% - ${250 - asideRefCurrent}px) `,
        }}
      >
        <Routes>
          <Route path="/new-cv" element={<FormCV />} />
          <Route
            path="/profile"
            element={<>{!isLoading ? <Profile /> : <></>}</>}
          />
          <Route
            path="/change-password"
            element={<>{!isLoading ? <ChangePassword /> : <></>}</>}
          />
        </Routes>
      </div>
    </div>
  );
}
