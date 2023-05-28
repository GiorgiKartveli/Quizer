import React from "react";
import loginIcon from "../../assets/enter.svg";
import classes from "./LoginImg.module.css";

const LoginImg = (props) => {
  return (
    <>
      <img className={classes.img} src={loginIcon} alt="icon" />
    </>
  );
};

export default LoginImg;
