import { CheckCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const CreateGroup = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div
      className={`flex self-center py-4 px-4 m-3 rounded-3xl justify-between ${
        lightTheme ? "bg-white" : "bg-slate-700 text-white"
      }`}
      style={{
        flex: "0.7",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <input
        type="text"
        placeholder="Create a group"
        className={`outline-0 border-none text-xl ml-3 w-full ${
          lightTheme ? "" : "bg-slate-700 text-white"
        }`}
      />
      <IconButton>
        <CheckCircle
          className={`${lightTheme ? "" : "text-white"}`}
        ></CheckCircle>
      </IconButton>
    </div>
  );
};

export default CreateGroup;
