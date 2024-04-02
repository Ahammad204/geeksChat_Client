import { Button, TextField } from "@mui/material";
import logo from "../assets/woutBg.png";

const Register = () => {
    return (
        <div
        className="bg-[#f4f5f8] rounded-3xl flex shadow-custom"
        style={{
          height: "90vh",
          width: "90vw",
        }}
      >
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
        <div
          className="bg-white rounded-3xl m-3 font-sans text-blue-800 font-bold flex flex-col justify-center items-center gap-5"
          style={{
            flex: "0.7",
          }}
        >
          <p className="text-xl">Login to your account</p>
          <TextField id="standard-basic" label="Enter User Name" variant="outlined" />
          <TextField id="outlined-password-input" label="Password" type="Password" autoComplete="current-password"></TextField>
          <Button  variant="outlined">Login</Button>
        </div>
      </div>
    );
};

export default Register;