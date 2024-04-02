/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConversationItem = ({ conversation }) => {
  const { _id, name, lastMassage, timeStamp } = conversation;
  console.log(conversation);
  const navigate = useNavigate();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div
      className={`grid gap-x-3 m-1 p-3 rounded-xl box-border  ${
        lightTheme
          ? " hover:bg-[#d9d9d9] active:bg-white"
          : "hover:bg-slate-500 active:bg-slate-700 text-white"
      }`}
      style={{
        gridTemplateColumns: "32px auto auto",
        gridTemplateRows: "auto auto",
      }}
      onClick={() => {
        navigate(`/app/chat/${_id}`);
      }}
    >
      <p
        className={`flex justify-center items-center bg-[#d9d9d9] text-3xl text-white font-extrabold  h-10 w-10 p-2  justify-self-center ${
          lightTheme ? "bg-[#d9d9d9] " : "bg-slate-700 text-white"
        }`}
        style={{
          gridArea: "1/1/3/2",
          borderRadius: "50%",
          alignSelf: "center",
        }}
      >
        {name[0]}
      </p>
      <p
        className={`${lightTheme ? "text-slate-500" : " text-white"}`}
        style={{
          gridArea: "1/2/2/4",
          fontWeight: "bold",
        }}
      >
        {name}
      </p>
      <p className="text-xs">{lastMassage}</p>
      <p
        style={{
          justifySelf: "flex-end",
          fontSize: "0.75rem",
        
        }}
      >
        {timeStamp}
      </p>
    </div>
  );
};

export default ConversationItem;
