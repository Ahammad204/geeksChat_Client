import { Button, TextField } from "@mui/material";
import logo from "../assets/woutBg.png";
import { useState } from "react";

const Login = () => {
  const [showlogin, setShowLogin] = useState(false);
  return (
    <>
      <div
        className="bg-[#f4f5f8] rounded-3xl flex  shadow-custom"
        style={{
          height: "90vh",
          width: "90vw",
        }}
      >
        {/* Image container */}
        <div
          className="flex justify-center items-center"
          style={{
            flex: "0.3",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "20vw",
            }}
          />
        </div>
        
          {/* Login container */}
          {showlogin && (
            <div
              className="bg-white rounded-3xl m-3 font-sans text-blue-800 font-bold flex flex-col justify-center items-center gap-5"
              style={{
                flex: "0.7",
              }}
            >
              <p className="text-xl">Login to your account</p>
              <TextField
                id="standard-basic"
                label="Enter User Name"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="Password"
                autoComplete="current-password"
              ></TextField>
              <Button variant="outlined">Login</Button>
              <p>
                Not have an account ?{" "}
                <span
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => {
                    setShowLogin(false);
                  }}
                >
                  Sign Up
                </span>
              </p>
            </div>
          )}

          {/* SignUp container */}

          {!showlogin && (
            <div
              className="bg-white rounded-3xl m-3 font-sans text-blue-800 font-bold flex flex-col justify-center items-center gap-5"
              style={{
                flex: "0.7",
              }}
            >
              <p className="text-xl">Login to your account</p>
              <TextField
                id="standard-basic"
                label="Enter User Name"
                variant="outlined"
              />
              <TextField
                id="standard-basic"
                label="Enter Email Address"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="Password"
                autoComplete="current-password"
              ></TextField>
              <Button variant="outlined">Sign Up</Button>
              <p>
                Already Have an account ?{" "}
                <span
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => {
                    setShowLogin(true);
                  }}
                >
                  Sign In
                </span>
              </p>
            </div>
          )}
        
      </div>
    </>
  );
};

export default Login;
