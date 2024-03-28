import logo from "../assets/woutBg.png";

const Welcome = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center gap-5 font-sans text-custom-gray border-b-5 border-solid border-[#63d7b0] rounded-3xl"
      style={{
      flex:"0.7"
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          height: "30vw",
        }}
      />
      <p>Explore the world Find your Bestfriend</p>
    </div>
  );
};

export default Welcome;
