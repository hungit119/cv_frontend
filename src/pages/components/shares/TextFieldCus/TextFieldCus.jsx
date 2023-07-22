import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./TextFieldCus.scss";
import styled, { css } from "styled-components";
const cx = classNames.bind(styles);
const Input = styled.textarea`
  resize: none;
  overflow: hidden;
  outline: none;
  border: 1px solid transparent;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 5px;
  &:hover {
    outline: #77a5cc dashed 1pt;
  }
  &::placeholder {
    color: black;
    font-weight: 100;
    font-family: "Courier New", Courier, monospace;
  }
`;
const TextFieldCus = ({
  fontsize,
  color,
  placeholder,
  width,
  fontweight,
  value,
  onChange,
  name,
  uppercase,
}) => {
  const textareaRef = useRef(null);
  function auto_grow() {
    textareaRef.current.style.height = "5px";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }
  return (
    <Input
      style={{
        width: `${width}%`,
        color: `${color}`,
        fontWeight: `${fontweight}`,
        fontSize: `${fontsize}px`,
        textTransform: uppercase ? "uppercase" : "",
      }}
      className={cx("wrapper-input-cus")}
      placeholder={placeholder}
      onInput={auto_grow}
      ref={textareaRef}
      rows={1}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default TextFieldCus;
