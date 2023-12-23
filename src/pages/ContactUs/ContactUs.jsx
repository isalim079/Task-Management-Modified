/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import contactWithUsAnimation from "../../assets/lottieAnimation/contactWithUs.json";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="h-screen flex justify-around items-center">
                <div className="flex-1">
                    <div>
                        <h1 className="text-4xl font-semibold uppercase">
                            Contact With Us
                        </h1>
                        <div className="border-2 border-teal-800 mb-4  w-[520px]"></div>
                        <h2 className="uppercase text-2xl font-bold ">
                            Tasker
                        </h2>
                        <p>
                            We understand the challenges of managing tasks
                            across different projects, deadlines, and teams.
                            That's why we've designed an intuitive and versatile
                            task management solution that adapts to your unique
                            needs. Whether you're a busy professional, a
                            dedicated team leader, or an ambitious entrepreneur,
                            our platform offers the tools to organize,
                            prioritize, and execute tasks efficiently.
                        </p>
                       <div className="">
                       <div className="flex space-x-7 text-3xl mt-5">
                            <AiFillFacebook />
                            <FaSquareXTwitter />
                            <FaInstagramSquare />
                            <FaLinkedin />
                        </div>
                       </div>
                    </div>
                </div>
                <div className="flex-1">
                    <Lottie
                        animationData={contactWithUsAnimation}
                        loop={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
