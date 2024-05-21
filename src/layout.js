import { Outlet } from "react-router-dom";
import Header from "./user/Header";
import "./layout.css";
import Onlet from "./user/Onlet"
import Footer from "./user/Footer";


const Layout = () => {
    return (
        <>
            <Header />
            <Onlet />
            {/*            
            <Footer/> */}
        </>
    );
};

export default Layout;