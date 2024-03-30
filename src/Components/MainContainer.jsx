/* eslint-disable no-unused-vars */
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ChatArea from "./ChatArea";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div
      className={` h-[90vh] w-[90vw] flex rounded-3xl ${
        lightTheme ? "bg-[#f4f5f8]" : "bg-slate-700 text-white"
      }`}
    >
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      {/* <Welcome></Welcome> */}
      {/* <CreateGroup></CreateGroup> */}

      {/* <Users_groups></Users_groups> */}
    </div>
  );
};

export default MainContainer;
