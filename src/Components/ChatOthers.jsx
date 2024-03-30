import { useSelector } from "react-redux";

const ChatOthers = () => {
  const prop1 = { name: "RandomUser", message: "This is a sample" };

  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div
      className={` text-black font-medium ${
        lightTheme ? "bg-white" : "bg-slate-700 text-white"
      }`}
    >
      <div
        className="grid p-1 m-1 rounded-xl box-border"
        style={{
          gridTemplateColumns: "48px auto",
          gridTemplateRows: "auto auto",
          columnGap: "10px",
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
          {prop1.name[0]}
        </p>

        <div
          className={` px-3 py-3 m-1 rounded-3xl w-max mt-3 flex flex-col ${
            lightTheme ? "bg-[#d9d9d9] text-slate-700" : "bg-slate-400 text-white"
          }`}
        >
          <p
            style={{
              gridArea: "1/2/2/4",
              fontWeight: "bold",
              
              textTransform: "capitalize",
            }}
          >
            {prop1.name}
          </p>

          <p className="text-lg font-light ">{prop1.message}</p>
          <p className="self-end text-xs font-light mt-1">12.00 AM</p>
        </div>
      </div>
    </div>
  );
};

export default ChatOthers;
