import Lottie from "lottie-react";
import profileAnimation from "../../assets/lottieAnimation/profile.json"

const Profile = () => {
    return (
        <div>
            <div className="">
                <div className="flex justify-center items-center flex-col h-screen">
                    <div>
                        <Lottie className="w-96" animationData={profileAnimation} loop={true} />
                    </div>
                    <div>
                       <h1 className="text-2xl -mt-16"> Hi, Welcome to your profile</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;