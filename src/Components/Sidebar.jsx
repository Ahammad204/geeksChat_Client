/* eslint-disable no-unused-vars */
import {
  AccountCircle,
  AddCircle,
  Groups,
  Nightlight,
  PersonAddAlt,
  Search,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ConversationItem from "./ConversationItem";
import { useState } from "react";

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
  return (
    <div className="flex-[0.3] flex flex-col">
      {/* Sidebar Header */}

      <div
        className="bg-white rounded-3xl px-1 py-3 m-3 flex justify-between"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <div>
          <IconButton>
            <AccountCircle></AccountCircle>
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAddAlt></PersonAddAlt>
          </IconButton>

          <IconButton>
            <Groups></Groups>
          </IconButton>

          <IconButton>
            <AddCircle></AddCircle>
          </IconButton>

          <IconButton>
            <Nightlight></Nightlight>
          </IconButton>
        </div>
      </div>

      {/* Sidebar Search */}

      <div className="bg-white rounded-3xl px-3 py-3 mx-3 flex items-center"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}>
        <IconButton>
          <Search></Search>
        </IconButton>

        <input
          type="text"
          placeholder="Search"
          className="outline-0 border-none text-xl ml-3 w-full"
        />
      </div>
      {/* Sidebar Conversation */}

      <div className="bg-white rounded-3xl px-3 py-3 m-3 flex-1"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}>
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
