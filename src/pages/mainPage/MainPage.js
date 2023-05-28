import React from "react";
import MainPagePicture from "../../components/MainPagePicture/MainPagePicture";
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <div className={classes.welcome}>
        Welcome To <span className={classes.span}>The Quizer!</span>
      </div>
      <div className={classes.wrapperDiv}>
        <div className={classes.lastSentence}>
          Login to answer the questions.
        </div>
        <div className={classes.img}>
          <MainPagePicture />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
