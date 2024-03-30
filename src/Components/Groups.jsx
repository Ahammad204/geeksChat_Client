import { IconButton } from "@mui/material";
import logo from "../assets/woutBg.png";
import { Search } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      {/* Main container */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className="flex flex-col"
        style={{
          flex: "0.7",
        }}
      >
        {/* Header container */}
        <div
          className={` rounded-3xl px-3 py-1 m-3 flex justify-between items-center ${
            lightTheme ? "bg-white" : "bg-slate-700 text-white"
          }`}
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <img
            src={logo}
            alt="logo"
            className={`h-14 w-14 ${lightTheme ? "" : " text-white"}`}
          />
          <p
            className={`ml-3 font-sans font-bold ${
              lightTheme ? "text-slate-700" : " text-white"
            }`}
          >
            Online Users
          </p>
        </div>

        {/* Search User */}
        <div
          className={` rounded-3xl px-3 py-3 mx-3 flex items-center ${
            lightTheme ? "bg-white" : "bg-slate-700 text-white"
          }`}
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <IconButton>
            <Search
              className={`${!lightTheme ? "bg-slate-700 text-white" : ""}`}
            ></Search>
          </IconButton>

          <input
            type="text"
            placeholder="Search"
            className={`outline-0 border-none text-xl ml-3 w-full ${
              lightTheme ? "" : "bg-slate-700 text-white"
            }`}
          />
        </div>

        {/* User group list */}
        <div
          className="flex-1 overflow-scroll p-3 "
          style={{
            scrollbarWidth: "none",
            /* WebKit */
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {/* Single group  */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center rounded-3xl py-5 px-5 m-1 gap-3 select-none transition duration-300 ease-in-out ${
              lightTheme
                ? "bg-white hover:bg-gray-200 "
                : "bg-slate-700 text-white hover:bg-gray-500 "
            }`}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
          >
            <p
              className={`flex justify-center items-center  text-3xl font-extrabold text-white h-10 w-10 p-2  justify-self-center ${
                lightTheme ? "bg-[#d9d9d9]" : "bg-slate-700 text-white"
              }`}
              style={{
                gridArea: "1/1/3/2",
                borderRadius: "50%",
                alignSelf: "center",
              }}
            >
              T
            </p>
            <p
              className={`${lightTheme ? "text-slate-700" : " text-white"}`}
              style={{
                gridArea: "1/2/2/4",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Test Groups
            </p>
          </motion.div>
      
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Groups;
