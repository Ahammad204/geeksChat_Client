const MessageOthers = () => {
  const prop1 = { name: "RandomUser", message: "This is a sample" };

  return (
    <div className="bg-white text-black font-medium ">
      <div
        className="grid p-1 m-1 rounded-xl box-border"
        style={{
          gridTemplateColumns: "48px auto",
          gridTemplateRows: "auto auto",
          columnGap: "10px",
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
          {prop1.name[0]}
        </p>

        <div className="bg-[#d9d9d9] px-3 py-3 m-1 rounded-3xl w-max mt-3 flex flex-col ">
          <p
            style={{
              gridArea: "1/2/2/4",
              fontWeight: "bold",
              color: "rgba(0,0,0,0.54)",
              textTransform: "capitalize",
            }}
          >
            {prop1.name}
          </p>

          <p className="text-lg font-light text-black">{prop1.message}</p>
          <p className="self-end text-xs font-light mt-1">12.00</p>
        </div>
      </div>
    </div>
  );
};

export default MessageOthers;
