import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Page/Login/Login";
import Home from "../Page/Home/Home";
import DashBoard from "../Layout/DashBoard";
import DashboardHome from "../Page/DashboardHome/DashboardHome";
import Appointment from "../Page/Appointment/Appointment";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
        {
          path: "/appointment",
          element:<Appointment></Appointment>,
        },
        
      ],
    },
    {
      path: "/dashboard",
      element:<DashBoard></DashBoard>,
      children: [
        {
          path: "/dashboard",
          element: <DashboardHome></DashboardHome>,
        }
        
      ],
    }
  ]);
  