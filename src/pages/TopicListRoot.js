import React from "react";
import { Outlet } from "react-router-dom";
import TopicsNavigation from "../components/topicsnavigation/TopicsNavigation";

const TopicListRootLayout = () => {
  return (
    <>
      <TopicsNavigation />
      <Outlet />
    </>
  );
};

export default TopicListRootLayout;
