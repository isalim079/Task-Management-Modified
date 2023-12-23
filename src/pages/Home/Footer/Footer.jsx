import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className="bg-teal-800 p-10">
                <div className="max-w-screen-xl mx-auto text-white">
                    <div className="text-xl md:text-3xl font-medium text-white flex justify-between items-center">
                        <span className="border border-white h-0 w-[520px]"></span>{" "}
                        TASKER{" "}
                        <span className="border border-white h-0 w-[520px]"></span>
                    </div>
                    <div className="mt-10 flex justify-around items-center">
                        <div className="uppercase text-sm text-center space-y-2">
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>About</p>
                        </div>
                        <div className="flex space-x-20 text-2xl">
                            <FaFacebookSquare />
                            <FaLinkedin />
                            <FaSquareXTwitter />
                        </div>
                        <div className="uppercase text-sm text-center space-y-2">
                            <p>Info Service Contact</p>
                            <p>Notes</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-center text-xs mt-10">
                            Copyright © 2023 - All right reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
