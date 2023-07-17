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
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("left")}>
          <img
            className={cx("avatar")}
            src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/355514973_651223463530340_6108461500967400728_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SoJJsHArrdwAX8yKqa0&_nc_ht=scontent.fhan2-3.fna&oh=00_AfC8T48i9wr0nW5xgQqZR2sWYuM0TXcVjBWN7G_LeCMxiQ&oe=64B96C40"
            alt=""
          />
          <p className={cx("heading")}>
            Hello {user?.fisrtname} {user?.lastname}
          </p>
        </div>
        <div className={cx("right")}>
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
