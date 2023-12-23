import Rating from "react-rating";
import { MdOutlineStarBorder, MdOutlineStarPurple500 } from "react-icons/md";

/* eslint-disable react/prop-types */
const BenifitTable = ({ benefitUser }) => {
    // console.log(benefitUser);

    const { name, profession, review, feedback } = benefitUser;
    // console.log(name);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body flex justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-sm">{profession}</p>
                <div className="border-2 border-teal-800 w-full "></div>
                <p className="text-center text-base">{feedback}</p>
                <div className="card-actions justify-center">
                    <Rating
                        className="text-3xl text-teal-800"
                        initialRating={review}
                        stop={5}
                        emptySymbol={<MdOutlineStarBorder />}
                        fullSymbol={<MdOutlineStarPurple500 />}
                    />
                </div>
            </div>
        </div>
    );
};

export default BenifitTable;
