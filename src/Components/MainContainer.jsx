/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const myContext = createContext();
function MainContainer() {
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);

  return (
    <div
      className={` h-[90vh] w-[90vw] main-container flex rounded-3xl ${
        lightTheme ? "bg-[#f4f5f8]" : "bg-slate-700 text-white"
      }`}
    >
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </myContext.Provider>
      {/* <Welcome></Welcome> */}
      {/* <CreateGroup></CreateGroup> */}

      {/* <Users_groups></Users_groups> */}
    </div>
  );
}

export default MainContainer;
