import mainPagePic from "../../assets/mainPagePhoto/main.png";
import classes from "./MainPagePicture.module.css";

const MainPagePicture = () => {
  return (
    <div>
      <img src={mainPagePic} alt="mainpagepic" className={classes.img} />
    </div>
  );
};

export default MainPagePicture;
