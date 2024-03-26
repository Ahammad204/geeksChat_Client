import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/geeksChatRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-[#dddedd] flex justify-center items-center">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
