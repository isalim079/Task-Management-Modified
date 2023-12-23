import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TaskManagementDashboard from "../pages/TaskManagementDashboard/TaskManagementDashboard";
import ContactUs from "../pages/ContactUs/ContactUs";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/taskManagementDashboard",
                element: <TaskManagementDashboard />,
            },
            {
                path: "/contactUs",
                element: <ContactUs />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
]);
