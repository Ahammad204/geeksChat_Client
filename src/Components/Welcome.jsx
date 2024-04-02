import { useSelector } from "react-redux";
import logo from "../assets/woutBg.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }
  return (
    <div
      className="flex flex-col justify-center items-center gap-5 font-sans text-custom-gray border-b-5 border-solid border-[#63d7b0] rounded-3xl"
      style={{
        flex: "0.7",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          height: "30vw",
        }}
      />
      <b className={`${lightTheme ? "" : "text-white"}`}>
        Hi , {userData.data.name} 👋
      </b>
      <p className={`${lightTheme ? "" : "text-white"}`}>
        Explore the world Find your Bestfriend
      </p>
    </div>
  );
};

export default Welcome;
