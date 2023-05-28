import React from "react";
import quizerIcon from "../../assets/MainLogo/cat.svg";
import classes from "./QuizerLogo.module.css";

const QuizerLogo = () => {
  return (
    <div>
      <img className={classes.logo} src={quizerIcon} alt="Quizer" />
    </div>
  );
};

export default QuizerLogo;
