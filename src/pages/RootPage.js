import React from "react";
import MainNavigationBar from "../components/mainnavigation/MainNavigationBar";
import { Outlet } from "react-router-dom";

// Outlet is needed to define where child routes should be defined

const RootPage = () => {
  return (
    <>
      {/* <h1>Root page</h1> */}
      <MainNavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
