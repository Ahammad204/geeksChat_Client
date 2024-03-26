/* eslint-disable react/prop-types */

const ConversationItem = ({ conversation }) => {
  const { name, lastMassage, timeStamp } = conversation;
  //   console.log(conversation);

  return (
    <div
      className="grid  gap-x-3 p-1 m-1 rounded-3xl"
      style={{
        gridTemplateColumns: "32px auto auto",
        gridTemplateRows: "auto auto",
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
          justifySelf:"flex-end",
          fontSize:"0.75rem",
          color: "rgba(0,0,0,0.54)",
        }}
      >
        {timeStamp}
      </p>
    </div>
  );
};

export default ConversationItem;
