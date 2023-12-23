/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames";
import "animate.css";
import bannerAnimation from "../../../assets/lottieAnimation/bannerTask.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../router/AuthProvider";

const TopBanner = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);

    const animationTitle = classNames(
        "animate__animated",
        "animate__bounceInDown",
        "animate__delay-0.5s"
    );
    const animationSubtitle = classNames(
        "animate__animated",
        "animate__bounceInUp",
        "animate__delay-0.5s"
    );
    const animationLottie = classNames(
        "animate__animated",
        "animate__zoomInDown",
        "animate__delay-0.5s"
    );

    return (
        <div className="bg-topBannerBackground bg-cover h-[calc(100vh-68px)] overflow-hidden">
            <div className="bg-gradient-to-b from-black  h-[calc(100vh-68px)]">
                <div className="flex justify-center items-center h-[calc(100vh-68px)]">
                    <div className="">
                        <div>
                            <h1
                                className={`text-slate-100 font-bold uppercase text-5xl ${animationTitle}`}
                            >
                                Your ultimate task manager
                            </h1>
                            <p
                                className={`text-white text-center text-lg mt-2 ${animationSubtitle}`}
                            >
                                Simplify Your To-Dos, Supercharge Your Day!
                            </p>
                        </div>
                        <div
                            className={`flex justify-center items-center ${animationLottie}`}
                        >
                            <Lottie
                                className="w-80 -mt-14"
                                animationData={bannerAnimation}
                                loop={true}
                            />
                        </div>
                        <div>
                            {user?.email ? (
                                <Link to="/taskManagementDashboard">
                                    <button className=" bg-teal-700  text-white w-full py-2">
                                        Let's explore
                                    </button>
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <button className=" bg-teal-700  text-white w-full py-2">
                                        Let's explore
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
