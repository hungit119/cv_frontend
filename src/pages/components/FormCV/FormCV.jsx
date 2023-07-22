import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FormCV.scss";
import Tippy from "@tippyjs/react";
import TippyWrapper from "../TippyWrapper/TippyWrapper";
import TippyHeadLess from "../TippyHeadless/TippyHeadless";
import FormatColorTextRoundedIcon from "@mui/icons-material/FormatColorTextRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";
import PhotoRoundedIcon from "@mui/icons-material/PhotoRounded";
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";
import ZoomOutRoundedIcon from "@mui/icons-material/ZoomOutRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Template1 from "../Template1/Template1";
const cx = classNames.bind(styles);

const FormCV = () => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top-tool")}>
        <div className={cx("toolbar")}>
          <div className={cx("toolbar-left")}>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <FormatColorTextRoundedIcon />
                  </span>
                  <p>Phông chữ</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <PhotoRoundedIcon />
                  </span>
                  <p>Màu sắc</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <AutoAwesomeMotionRoundedIcon />
                  </span>
                  <p>Mẫu CV</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <PersonRoundedIcon />
                  </span>
                  <p>Ảnh hồ sơ</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <div className={cx("toolbar-item-child")}>
                <button className={cx("btn-download")}>
                  <span>
                    <ArrowDownwardRoundedIcon />
                  </span>
                  <p>Tải Xuống</p>
                </button>
              </div>
            </div>
            <div className={cx("toolbar-item")}>
              <div className={cx("toolbar-item-child")}>Quản lí CV</div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("editor")}>
        <div className={cx("cv")}>
          <div className={cx("form-cv")}>
            <Template1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCV;
