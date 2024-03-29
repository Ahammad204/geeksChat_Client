/* eslint-disable no-unused-vars */
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ChatArea from "./ChatArea";


const MainContainer = () => {

  return (
    <div className="bg-[#f4f5f8] h-[90vh] w-[90vw] flex rounded-3xl">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      {/* <Welcome></Welcome> */}
      {/* <CreateGroup></CreateGroup> */}
    
      {/* <Users_groups></Users_groups> */}
    </div>
  );
};

export default MainContainer;
