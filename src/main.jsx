/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/geeksChatRouter";
import { Provider, useSelector } from "react-redux";
import { store } from "./Features/Store";

const App = () => {
  const lightTheme = useSelector((state) => state.themeKey); // Access theme state

  return (
    <React.StrictMode>
      <div className={`min-h-screen flex justify-center items-center ${
          lightTheme ? "bg-[#dddedd]" : "bg-slate-500 text-white"
        }`}>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render( 
  <Provider store={store}>
    <App />
  </Provider>
);
