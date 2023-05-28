import React from "react";
import classes from "./TopicList.module.css";
import { NavLink } from "react-router-dom";

// import images

import artImg from "../../assets/topicPhotos/Art.jpg";
import historyImg from "../../assets/topicPhotos/hystory.jpg";
import mathImg from "../../assets/topicPhotos/math.jpg";
import movieImg from "../../assets/topicPhotos/movie.jpg";
import musicImg from "../../assets/topicPhotos/music.jpg";
import sportImg from "../../assets/topicPhotos/sport.jpg";
import technologyImg from "../../assets/topicPhotos/technology.jpg";

const TopicList = ({ user }) => {
  const topics = [
    { name: "Art", Image: artImg },
    { name: "History", Image: historyImg },
    { name: "Math", Image: mathImg },
    { name: "Music", Image: musicImg },
    { name: "Movie", Image: movieImg },
    { name: "Sport", Image: sportImg },
    { name: "Technology", Image: technologyImg },
  ];

  return (
    <div className={classes.topicContainer}>
      <h1 className={classes.caption}>Choose Your Theme</h1>
      <ul className={classes.topicsWrapper}>
        {topics.map((topic, index) => (
          <NavLink
            to={`/topicList/${topic.name.toLowerCase()}Topic`}
            className={classes.topic}
            key={index}
          >
            <img
              className={classes.topicImage}
              src={topic.Image}
              alt={topic.name}
            />
            <div className={classes.topicName}>{topic.name}</div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
