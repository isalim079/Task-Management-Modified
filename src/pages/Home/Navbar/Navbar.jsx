import { NavLink } from "react-router-dom";

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            textDecoration: isActive ? "underline" : "",
                            textDecorationColor: isActive ? "white" : "",
                            color: isActive ? "white" : "white",
                        };
                    }}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contactUs"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            textDecoration: isActive ? "underline" : "",
                            textDecorationColor: isActive ? "white" : "",
                            color: isActive ? "white" : "white",
                        };
                    }}
                >
                    Contact Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/taskManagementDashboard"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            textDecoration: isActive ? "underline" : "",
                            textDecorationColor: isActive ? "white" : "",
                            color: isActive ? "white" : "white",
                        };
                    }}
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/profile"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            textDecoration: isActive ? "underline" : "",
                            textDecorationColor: isActive ? "white" : "",
                            color: isActive ? "white" : "white",
                        };
                    }}
                >
                    Profile
                </NavLink>
            </li>
        
        </>
    );

    

    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className="md:py-4 py-2 bg-teal-800">
            <div className="lg:hidden">
                <div className="flex w-full justify-between items-center px-3 md:p-0">
                    <div className="">
                        <button
                            className="text-2xl"
                            onClick={() => setMenuToggle(!menuToggle)}
                        >
                            {menuToggle ? (
                                <AiOutlineMenuUnfold className="text-white"></AiOutlineMenuUnfold>
                            ) : (
                                <AiOutlineMenuFold className="text-white"></AiOutlineMenuFold>
                            )}
                        </button>
                        <div
                            className="absolute text-white"
                            onClick={() => setMenuToggle(!menuToggle)}
                        >
                            {menuToggle ? (
                                <div className="bg-gray-800 p-6">
                                    <div className="space-y-4 text-xs list-none">
                                        {navLinks}
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    <div className="text-white">
                        <h1 className="text-lg font-black">TASKER</h1>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-between items-center max-w-screen-xl mx-auto hidden">
                <div className="text-white">
                    <h1 className="text-3xl font-black">TASKER</h1>
                </div>
                <div className="flex list-none space-x-7 text-base">
                    {navLinks}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
