import React from "react";
import emailIcon from "../../assets/contactAssets/email.svg";

import classes from "./EmailIcon.module.css";

const EmailIcon = () => {
  return (
    <div>
      <img className={classes.img} src={emailIcon} alt="Email" />
    </div>
  );
};

export default EmailIcon;
