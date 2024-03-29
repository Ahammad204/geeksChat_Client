/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const ConversationItem = ({ conversation }) => {
  const { _id,name, lastMassage, timeStamp } = conversation;
  //   console.log(conversation);
  const navigate = useNavigate();
  return (
    <div
      className="grid gap-x-3 m-1 p-3 rounded-xl box-border hover:bg-[#d9d9d9] active:bg-white"
      style={{
        gridTemplateColumns: "32px auto auto",
        gridTemplateRows: "auto auto",
      }}
      onClick={() => {
        navigate(`/app/chat/${_id}`);
      }}
    >
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
      <p
        style={{
          gridArea: "1/2/2/4",
          fontWeight: "bold",
          color: "rgba(0,0,0,0.54)",
        }}
      >
        {name}
      </p>
      <p className="text-xs">{lastMassage}</p>
      <p
        style={{
          justifySelf: "flex-end",
          fontSize: "0.75rem",
          color: "rgba(0,0,0,0.54)",
        }}
      >
        {timeStamp}
      </p>
    </div>
  );
};

export default ConversationItem;
