import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const MainLayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayOut;
