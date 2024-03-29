import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/mainLayout';
import MainContainer from "../Components/MainContainer";
import Login from "../Components/Login";
import Welcome from './../Components/Welcome';
import ChatArea from './../Components/ChatArea';
import Users from "../Components/Users";
import Groups from "../Components/Groups";
import CreateGroup from "../Components/CreateGroup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element: <Login></Login>
        }
      ]
    },  {
      path:'/app',
      element: <MainContainer></MainContainer>,
      children:[
        {
          path:'/app',
          element:<Welcome></Welcome>
        },
        {
          path:'/app/chat/:id',
          element:<ChatArea></ChatArea>
        },
        {
          path:'/app/users',
          element:<Users></Users>
        },
        {
          path:'/app/groups',
          element:<Groups></Groups>
        },
        {
          path:'/app/createGroups',
          element:<CreateGroup></CreateGroup>
        },
      ]
     
  }
  ]);
   