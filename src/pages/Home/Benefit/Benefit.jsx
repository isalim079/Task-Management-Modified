import axios from "axios";
import { useEffect, useState } from "react";

import BenifitTable from "./BenifitTable";
import Marquee from "react-fast-marquee";

const Benefit = () => {
    const [benefitedUser, setBenefitedUser] = useState([]);

    useEffect(() => {
        axios
            .get("https://task-manager-server-eight-sigma.vercel.app/benefits")
            .then((res) => setBenefitedUser(res.data));
    }, []);
    // console.log(benefitedUser);

    return (
        <div className="my-14">
            <div>
                <div>
                    <h1 className="md:text-5xl text-2xl text-center uppercase font-medium text-teal-800 ">
                        Benefited Talks
                    </h1>
                </div>
                <div className="flex justify-center">
                    <div className="w-[390px] border-teal-800 border-4"></div>
                </div>
            </div>
            <div className="flex justify-center items-center h-[calc(100vh-320px)]">
                <div>
                    <div className="max-w-screen-xl mx-auto text-xl">
                        <Marquee
                            className="gap-10 h-[calc(100vh-320px)]"
                            speed={70}
                        >
                            {" "}
                            <div className="flex gap-20">
                                {benefitedUser.map((benefitUser) => (
                                    <BenifitTable
                                        key={benefitUser?._id}
                                        benefitUser={benefitUser}
                                    />
                                ))}
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
