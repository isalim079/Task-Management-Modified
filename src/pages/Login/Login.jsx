import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottieAnimation/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../router/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const { loginWithEmailPass } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const location = useLocation();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        loginWithEmailPass(email, password)
            .then((result) => {
                // console.log(result.user.email);

                axiosPublic.get("/users").then((res) => {
                    // console.log(res.data);
                    const existingEmail = res.data.find(
                        (users) => users?.email === result?.user?.email
                    );
                    if (existingEmail?.shopId) {
                        navigate(
                            location?.state
                                ? location.state
                                : "/taskManagementDashboard"
                        );
                    } else {
                        navigate(
                            location?.state
                                ? location.state
                                : "/taskManagementDashboard"
                        );
                    }
                });
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);

                if (error.code === "auth/invalid-login-credentials") {
                    toast.error("Email and password doesn't match", {
                        position: "top-center",
                    });
                }
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row w-full justify-around">
                    <div className="">
                        <Lottie
                            className=""
                            animationData={loginAnimation}
                            loop={true}
                        />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-teal-800 ">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
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
                                        New to TASKER?{" "}
                                        <Link to="/register">
                                            <span className="underline text-sm hover:text-white">
                                                Register Now
                                            </span>
                                        </Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control ">
                                <button className="bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
                                    Login
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

export default Login;
