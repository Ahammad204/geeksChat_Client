import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/geeksChatRouter";
import { Provider } from "react-redux";
import { store } from "./Features/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="min-h-screen bg-[#dddedd] flex justify-center items-center">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
