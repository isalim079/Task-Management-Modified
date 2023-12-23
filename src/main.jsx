import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import AuthProvider from "./router/AuthProvider";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div className="font-Poppins">
            <AuthProvider>
                <RouterProvider router={router}></RouterProvider>
                <ToastContainer />
            </AuthProvider>
        </div>
    </React.StrictMode>
);
