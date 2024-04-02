/* eslint-disable no-unused-vars */
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import logo from "../assets/woutBg.png";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toaster from "./Toaster";

const Login = () => {
  const [showlogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Function for login
  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/login",
        data,
        config
      );
      console.log("Login : ", response);
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app");
    } catch (error) {
      setLogInStatus({
        msg: "Invalid User name or Password",
        key: Math.random(),
      });
    }
    setLoading(false);
  };

  // Sign up handler
  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/register",
        data,
        config
      );
      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 405) {
        setLogInStatus({
          msg: "User with this email ID already Exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 406) {
        setLogInStatus({
          msg: "User Name already Taken, Please take another one",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
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

            {/* UserName Field */}
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="primary"
              name="name"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  loginHandler();
                }
              }}
            />

            {/* Password Field */}
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="primary"
              name="password"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  loginHandler();
                }
              }}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={loginHandler}
              isLoading
            >
              Login
            </Button>
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
            {logInStatus ? (
              <Toaster key={logInStatus.key} message={logInStatus.msg} />
            ) : null}
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
            <p className="text-xl">Create a new account!</p>

            {/* User name */}
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="primary"
              name="name"
              helperText=""
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  signUpHandler();
                }
              }}
            />

            {/* Email Address */}
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter Email Address"
              variant="outlined"
              color="primary"
              name="email"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="primary"
              name="password"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  signUpHandler();
                }
              }}
            />
            <Button variant="outlined" color="primary" onClick={signUpHandler}>
              Sign Up
            </Button>
            <p>
              Already Have an account ?{" "}
              <span
                className="text-blue-500 underline cursor-pointer"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Log In
              </span>
            </p>
            {signInStatus ? (
              <Toaster key={signInStatus.key} message={signInStatus.msg} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
