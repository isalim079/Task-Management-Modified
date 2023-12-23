/* eslint-disable no-useless-escape */
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerAnimation from "../../assets/lottieAnimation/register.json";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../router/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const { registerWithEmailPass } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const image = form.get("image");
        const profession = form.get("profession");
        const email = form.get("email");
        const password = form.get("password");
        // console.log(image, name, email, password);

        const taskerUser = { name, email, password, profession, image };

        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

        if (!specialCharRegex.test(password)) {
            toast.error("Password should have one special character included", {
                position: "top-center",
            });
            return;
        }

        if (!uppercaseRegex.test(password)) {
            toast.error("Password should have one capital character included", {
                position: "top-center",
            });
            return;
        }

        if (password.length < 0) {
            toast.error("Password should be 6 character or more", {
                position: "top-center",
            });
            return;
        }

        fetch("https://task-manager-server-eight-sigma.vercel.app/users", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                const existingEmail = data.find(
                    (user) => user?.email === email
                );

                if (existingEmail) {
                    toast.error("An account with this email already exist");
                    return;
                }

                registerWithEmailPass(email, password)
                    .then((result) => {
                        console.log(result.user);

                        toast.success(
                            "You have successfully created your account"
                        );

                        updateProfile(result.user, {
                            displayName: name,
                            photoURL: image,
                        });
                    })
                    .catch((error) => {
                        console.log(error.code);
                        console.log(error.message);
                    });

                fetch("https://task-manager-server-eight-sigma.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(taskerUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.insertedId) {
                            toast.success(
                                "Successfully added user to database"
                            );
                        }

                        navigate(
                            location?.state
                                ? location.state
                                : "/taskManagementDashboard"
                        );

                        // form.reset();
                    });
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
                    <div className="">
                        <Lottie
                            className="w-[520px]"
                            animationData={registerAnimation}
                            loop={true}
                        />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-teal-800 ">
                        <form
                            className="card-body grid grid-cols-1 md:grid-cols-2"
                            onSubmit={handleRegister}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Name
                                    </span>
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Profession
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="profession"
                                    placeholder="Profession"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Profile picture link
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="https://"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <p className="label-text-alt text-white">
                                        Already have an account?{" "}
                                        <Link to="/login">
                                            <span className="underline text-sm hover:text-white">
                                                Login Now
                                            </span>
                                        </Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control col-span-2">
                                <button className="bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
                                    Register
                                </button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
