/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
  AccountCircle,
  AddCircle,
  ExitToApp,
  Groups,
  Home,
  LightMode,
  Nightlight,
  PersonAddAlt,
  Search,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/ThemeSlice";
import "../Styles/CustomStyle.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { myContext } from "./MainContainer";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const { refresh, setRefresh } = useContext(myContext);
  const [conversations, setConversations] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();

  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get("http://localhost:5000/chat/", config).then((response) => {
      console.log("Data refresh in sidebar ", response.data);
      setConversations(response.data);
    });
  }, [refresh, user.token]);

  return (
    <div className="flex-[0.3] flex flex-col sidebar-container">
      {/* Sidebar Header */}
      <div
        className={`rounded-3xl px-1 py-3 m-3 sb-header flex md:justify-between ${
          !lightTheme ? "bg-slate-700" : "bg-white"
        }`}
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

          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lightTheme ? (
              <Nightlight
                style={{
                  width: "1.25em",
                  height: "1.25em",
                }}
              ></Nightlight>
            ) : (
              <LightMode
                className={`${!lightTheme ? "bg-slate-700 text-white" : ""}`}
                style={{
                  width: "1.25em",
                  height: "1.25em",
                }}
              ></LightMode>
            )}
          </IconButton>

          <IconButton
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToApp
              className={`${!lightTheme ? "bg-slate-700 text-white" : ""}`}
            />
          </IconButton>
        </div>
      </div>

      {/* Sidebar Search */}
      <div
        className={`rounded-3xl px-3 py-3 mx-3 hidden md:flex items-center ${
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
        className={`rounded-3xl px-3 py-3 m-3 hidden md:flex flex-col flex-1 ${
          lightTheme ? "bg-white" : "bg-slate-700 text-white"
        }`}
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        {conversations.map((conversation, index) => {
          if (conversation.users.length === 1) {
            return <div key={index}></div>;
          }
          if (conversation.latestMessage === undefined) {
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                  setRefresh(!refresh);
                }}
              >
                <div
                  key={index}
                  className="conversation-container"
                  onClick={() => {
                    navigate(
                      "/app/chat/" +
                        conversation._id +
                        "&" +
                        conversation.users[1].name
                    );
                  }}
                >
                  <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                    {conversation.users[1].name[0]}
                  </p>
                  <p className={"con-title" + (lightTheme ? "" : " dark")}>
                    {conversation.users[1].name}
                  </p>

                  <p className="con-lastMessage">
                    No previous Messages, click here to start a new chat
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="conversation-container"
                onClick={() => {
                  navigate(
                    "/app/chat/" +
                      conversation._id +
                      "&" +
                      conversation.users[1].name
                  );
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                  {conversation.users[1].name[0]}
                </p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {conversation.users[1].name}
                </p>

                <p className="con-lastMessage">
                  {conversation.latestMessage.content}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
