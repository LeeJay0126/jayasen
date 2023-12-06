import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Project from "../../Pages/Projects/Project";


const MobileMenu = () => {
    const [displayMenu, setMenu] = useState(false);

    const mobileMenuHandler = () => {
        setMenu(!displayMenu);
    }

    return (
        <div className="mobileMenu">
            <AiOutlineMenuUnfold className="menuIcon" onClick={mobileMenuHandler} />
            <div className={displayMenu ? "sideBar sideBarActive" : "sideBar"}>
                <ul>
                    <Link to="/" element={<Home />}><li>HOME</li></Link>
                    <Link to="/projects" element={<Project />}><li>PROJECT</li></Link>
                    <Link to="/about" element={<About />}><li>RESUME</li></Link>
                    <Link to="/contact" element={<ContactUs />}><li>CONTACT US</li></Link>
                </ul>
                <h2 className="sideBarHeading">
                    J<span>ay . </span>Asen
                </h2>
            </div>
        </div>
    );
}

export default MobileMenu;