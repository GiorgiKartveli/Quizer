import React from "react";
import addressIcon from "../../assets/contactAssets/location.svg";
import classes from "./AddressIcon.module.css";

const AddressIcon = () => {
  return (
    <div>
      <img className={classes.img} src={addressIcon} alt="address" />
    </div>
  );
};

export default AddressIcon;
