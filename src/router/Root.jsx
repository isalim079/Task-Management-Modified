import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";
import FloatingWindow from "../pages/FloatingWindow/FloatingWindow";

const Root = () => {
    return (
        <div>
            <FloatingWindow />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;