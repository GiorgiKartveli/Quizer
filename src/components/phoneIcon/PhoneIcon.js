import React from "react";
import phoneIcon from "../../assets/contactAssets/phone.svg";

import classes from "./PhoneIcon.module.css";

const PhoneIcon = () => {
  return (
    <div>
      <img className={classes.img} src={phoneIcon} alt="Phone" />
    </div>
  );
};

export default PhoneIcon;
