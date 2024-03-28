/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Delete, Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ChatArea = ({ conversation }) => {
  // const { name, timeStamp } = conversation;
  const name = "Ahammad";
  const timeStamp = "Today";

  return (
    <div className="flex-[0.7] flex flex-col">
      {/* Chat area Header */}
      <div className="flex items-center gap-3 bg-white p-3 m-3 rounded-3xl">
        <p
          className="flex justify-center items-center bg-[#d9d9d9] text-3xl font-extrabold text-white h-10 w-10 p-2  justify-self-center"
          style={{
            gridArea: "1/1/3/2",
            borderRadius: "50%",
            alignSelf: "center",
          }}
        >
          {name[0]}
        </p>
        <div className="flex flex-col justify-center flex-1">
          <p>{name}</p>
          <p>{timeStamp}</p>
        </div>
        <IconButton>
          <Delete></Delete>
        </IconButton>
      </div>

      {/* Chat area  */}
      <div className="flex-1 bg-white p-3 mx-3 rounded-3xl"> Message</div>

      {/* Chat area Text input */}
      <div className="bg-white p-3 m-3 rounded-3xl flex justify-between">
        <input type="text" placeholder="Type a message" className="outline-0 border-none text-xl ml-3 w-full" />
        <IconButton>
          <Send></Send>
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
