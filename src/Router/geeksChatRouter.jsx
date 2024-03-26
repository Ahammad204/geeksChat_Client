import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/mainLayout';
import MainContainer from "../Components/MainContainer";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element: <MainContainer></MainContainer>
        }
      ]
    },
  ]);
   