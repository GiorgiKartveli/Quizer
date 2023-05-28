import React from "react";

import AddressIcon from "../../components/adressIcon/AddressIcon";
import EmailIcon from "../../components/EmailIcon/EmailIcon";
import PhoneIcon from "../../components/phoneIcon/PhoneIcon";

import classes from "./Contact.module.css";

const ContactPage = () => {
  return (
    <div>
      <h1 className={classes.caption}>CONTACT US</h1>
      <div className={classes.contact_item}>
        <div>
          <AddressIcon />
          <h1>ADDRESS</h1>
          <h2>123 Main Street, City, State, ZIP</h2>
          <h2>456 Elm Avenue, City, State, ZIP</h2>
        </div>

        <div>
          <EmailIcon />
          <h1>EMAIL</h1>
          <h2>Quizer@google.com</h2>
          <h2>QuizerMarketing.google.com</h2>
        </div>

        <div>
          <PhoneIcon />
          <h1>PHONE</h1>
          <h2>+994 22 444 13</h2>
          <h2>+994 33 555 14</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
