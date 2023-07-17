import React from "react";
import style from "./HomePage.scss";
import classnames from "classnames/bind";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
const cx = classnames.bind(style);

const HomePage = () => {
  const user = useSelector((state) => state.userReducer.user);
  return <div className={cx("wrapper")}></div>;
};

export default HomePage;
