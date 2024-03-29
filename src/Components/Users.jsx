import { IconButton } from "@mui/material";
import logo from "../assets/woutBg.png";
import { Search } from "@mui/icons-material";

const Users = () => {
  return (
    // Main container
    <div
      className="flex flex-col"
      style={{
        flex: "0.7",
      }}
    >
      {/* Header container */}
      <div
        className="bg-white rounded-3xl px-3 py-1 m-3 flex justify-between items-center"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <img src={logo} alt="logo" className="h-14 w-14" />
        <p
          className="ml-3 font-sans font-bold "
          style={{
            color: "rgba(0,0,0,0.54)",
          }}
        >
          Online Users
        </p>
      </div>

      {/* Search User */}
      <div
        className="bg-white rounded-3xl px-3 py-3 mx-3 flex items-center"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <IconButton>
          <Search></Search>
        </IconButton>

        <input
          type="text"
          placeholder="Search"
          className="outline-0 border-none text-xl ml-3 w-full"
        />
      </div>

      {/* User group list */}
      <div
        className="flex-1 overflow-scroll p-3 "
        style={{
          scrollbarWidth: "none",
          /* WebKit */
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {/* Single user  */}
        <div
          className="flex items-center bg-white rounded-3xl py-5 px-5 m-1 gap-3 select-none transition duration-300 ease-in-out hover:bg-gray-200"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
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
            T
          </p>
          <p
            style={{
              gridArea: "1/2/2/4",
              fontWeight: "bold",
              color: "rgba(0,0,0,0.54)",
              textTransform: "capitalize",
            }}
          >
            Test User
          </p>
        </div>

   
      </div>
    </div>
  );
};

export default Users;
