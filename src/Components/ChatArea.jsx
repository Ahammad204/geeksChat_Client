/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Delete, Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MessageSelf from "./MessageSelf";
import ChatOthers from "./ChatOthers";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const ChatArea = () => {
  const [conversations, setConversation] = useState([
    {
      _id: 1,
      name: "Test01",
      lastMassage: "Last01",
      timeStamp: "Today",
    },
    {
      _id: 2,
      name: "Test02",
      lastMassage: "Last02",
      timeStamp: "Today",
    },
    {
      _id: 3,
      name: "Ahammad",
      lastMassage: "Last03",
      timeStamp: "Today",
    },
  ]);

  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className="flex-[0.7] flex flex-col chatArea-container"
      >
        {/* Chat area Header */}
        <div
          className={`flex items-center gap-3  p-3 m-3 rounded-3xl ${
            lightTheme ? "bg-white" : "bg-slate-700 text-white"
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
            {conversations[0].name[0]}
          </p>
          <div
            className={`flex flex-col justify-center flex-1 ${
              lightTheme ? "text-slate-700" : " text-white"
            }`}
          >
            <p
              style={{
                gridArea: "1/2/2/4",
                fontWeight: "bold",
              }}
            >
              {conversations[0].name}
            </p>
            <p
              style={{
                justifySelf: "flex-end",
                fontSize: "0.75rem",
              }}
            >
              {conversations[0].timeStamp}
            </p>
          </div>
          <IconButton>
            <Delete className={`${lightTheme ? "" : " text-white"}`}></Delete>
          </IconButton>
        </div>

        {/* Chat area  */}
        <div
          className={`flex-1  p-3 mx-3 rounded-3xl overflow-scroll ${
            lightTheme ? "bg-white" : "bg-slate-700 text-white"
          }`}
          style={{
            scrollbarWidth: "none",
            /* WebKit */
            "::-webkit-scrollbar": {
              display: "none",
            },
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <ChatOthers></ChatOthers>
          <MessageSelf></MessageSelf>
        </div>

        {/* Chat area Text input */}
        <div
          className={` p-3 m-3 rounded-3xl flex justify-between ${
            lightTheme ? "bg-white" : "bg-slate-700 text-white"
          }`}
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <input
            type="text"
            placeholder="Type a message"
            className={`outline-0 border-none text-xl ml-3 w-full ${
              lightTheme ? "" : "bg-slate-700 text-white"
            }`}
          />
          <IconButton>
            <Send
              className={`${lightTheme ? "text-slate-700" : " text-white"}`}
            ></Send>
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatArea;
