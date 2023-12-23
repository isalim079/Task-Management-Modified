import { FcGoogle } from "react-icons/fc";

import { useContext, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../router/AuthProvider";

const SocialLogin = () => {
    const { handleGoogleLogin } = useContext(AuthContext);

    const [imsUsers, setImsUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://task-manager-server-eight-sigma.vercel.app/users")
            .then((res) => {
                setImsUsers(res.data);
            })
            .catch((error) => {
                console.log(error, "social login user fetching error");
            });
    }, []);

    const location = useLocation();

    const navigate = useNavigate();

    const handleSocialLogin = (media) => {
        media()
            .then((res) => {
                if (res?.user) {
                    const userData = {
                        image: res?.user?.photoURL,
                        name: res?.user?.displayName,
                        email: res?.user?.email,
                    };

                    const userExists = imsUsers.some(
                        (imsUser) => imsUser.email === userData.email
                    );

                    if (!userExists) {
                        fetch("https://task-manager-server-eight-sigma.vercel.app/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(userData),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                if (data.insertedId) {
                                    console.log(
                                        "Successfully added user to database"
                                    );
                                }
                            });
                    }
                }

                console.log(res);
                navigate(location?.state ? location.state : "/taskManagementDashboard");
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    return (
        <div className="flex justify-around items-center   mb-4">
            <div className="  text-sm md:text-base">
                <h1 className="text-white text-center"> continue with</h1>
            </div>
            <div className="flex justify-center">
                <div>
                    <button
                        onClick={() => handleSocialLogin(handleGoogleLogin)}
                        className=" rounded-md  px-5 justify-center py-2 text-sm md:text-base bg-darkBrownShade    flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105 underline text-white"
                    >
                        <FcGoogle className="text-xl"></FcGoogle>
                        Google
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default SocialLogin;
