/* eslint-disable no-unused-vars */
import {
  AccountCircle,
  AddCircle,
  Groups,
  Home,
  LightMode,
  Nightlight,
  PersonAddAlt,
  Search,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ConversationItem from "./ConversationItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/ThemeSlice";
import "../Styles/CustomStyle.css";

const Sidebar = () => {
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
  // console.log(conversations)

  const navigate = useNavigate();
  const disPatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className="flex-[0.3] flex flex-col sidebar-container">
      {/* Sidebar Header */}

      <div
        className={` rounded-3xl px-1 py-3 m-3 sb-header flex md:justify-between ${
          !lightTheme ? "bg-slate-700" : "bg-white"
        } `}
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <div>
          <IconButton
            onClick={() => {
              navigate("/app");
            }}
          >
            <Home
              className={`${!lightTheme ? "bg-slate-700 text-white" : ""}`}
              style={{
                width: "1.25em",
                height: "1.25em",
              }}
            ></Home>
          </IconButton>
        </div>

        <div>
          <IconButton
            onClick={() => {
              navigate("/app/users");
            }}
          >
            <PersonAddAlt
              className={`${!lightTheme ? "bg-slate-700 text-white" : ""}`}
              style={{
                width: "1.25em",
                height: "1.25em",
              }}
            ></PersonAddAlt>
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("/app/groups");
            }}
          >
            <Groups
              className={`${!lightTheme ? "bg-slate-700 text-white" : ""}`}
              style={{
                width: "1.25em",
                height: "1.25em",
              }}
            ></Groups>
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("/app/createGroups");
            }}
          >
            <AddCircle
              className={`${!lightTheme ? "bg-slate-700 text-white" : ""}`}
              style={{
                width: "1.25em",
                height: "1.25em",
              }}
            ></AddCircle>
          </IconButton>

          <IconButton onClick={() => disPatch(toggleTheme())}>
            {lightTheme && (
              <Nightlight
                style={{
                  width: "1.25em",
                  height: "1.25em",
                }}
              ></Nightlight>
            )}
            {!lightTheme && (
              <LightMode
                className={`${!lightTheme ? "bg-slate-700 text-white" : ""}`}
                style={{
                  width: "1.25em",
                  height: "1.25em",
                }}
              ></LightMode>
            )}
          </IconButton>
        </div>
      </div>

      {/* Sidebar Search */}

      <div
        className={` rounded-3xl px-3 py-3 mx-3 hidden md:flex items-center ${
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
      {/* Sidebar Conversation */}

      <div
        className={` rounded-3xl px-3 py-3 m-3 hidden md:flex flex-col flex-1 ${
          lightTheme ? "bg-white" : "bg-slate-700 text-white"
        }`}
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        {conversations.map((conversation) => {
          return (
            <ConversationItem
              key={conversation._id}
              conversation={conversation}
            ></ConversationItem>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
