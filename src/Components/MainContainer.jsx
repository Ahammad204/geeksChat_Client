/* eslint-disable no-unused-vars */
import { useState } from "react";
import ChatArea from "./ChatArea";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import CreateGroup from './CreateGroup';

const MainContainer = () => {
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
  return (
    <div className="bg-[#f4f5f8] h-[90vh] w-[90vw] flex rounded-3xl">
      <Sidebar></Sidebar>
      {/* <Welcome></Welcome> */}
      {/* <CreateGroup></CreateGroup> */}
      <ChatArea conversation={conversations[0]}></ChatArea>
    </div>
  );
};

export default MainContainer;
