import React from "react";
import classes from "./AboutUs.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={classes.about_container}>
        <h1 className={classes.h1}> Welcome to the Quizer</h1>
        <p className={classes.p}>
          Our Quiz app is a fun and interactive platform that allows you to test
          your knowledge and challenge yourself with a wide range of quizzes.
          Whether you are a trivia enthusiast or simply looking to expand your
          knowledge in various topics, our app has something for everyone.
        </p>
      </div>
      <div>
        <div className={classes.about_container}>
          <h1 className={classes.h1}>Features</h1>
          <p className={classes.p}>
            Extensive Quiz Collection: Access a diverse collection of quizzes on
            various subjects, including history, geography, science, sports, and
            more. Expand your knowledge and discover fascinating facts along the
            way. Multiple Difficulty Levels: Choose from different difficulty
            levels to suit your preferences and challenge yourself accordingly.
            From easy questions to more challenging ones, there's a quiz for
            every skill level.
          </p>
        </div>
        <div>
          <div className={classes.about_container}>
            <h1 className={classes.h1}>Engaging User Experience</h1>
            <p className={classes.p}>
              Our user-friendly interface ensures a seamless and enjoyable quiz
              experience. Answer questions, track your progress, and compete
              with friends to see who can achieve the highest score. Learn and
              Improve: Our app not only entertains but also educates. With
              detailed explanations for each question, you can learn new
              information and improve your understanding of various topics.
            </p>
          </div>
          <div>
            <div className={classes.about_container}>
              <h1 className={classes.h1}>Custom Quizzes</h1>
              <p className={classes.p}>
                Create your own quizzes and share them with friends. Challenge
                others to test their knowledge on subjects you're passionate
                about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
