import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Project from "../../Pages/Projects/Project";

const MenuOptions = () => {

    const [isHovered, setHovered] = useState(false);

    const onMenuHoverHandler = () => {
        setHovered(!isHovered);
    };

    return (
        <div className="optionList" onMouseEnter={onMenuHoverHandler} onMouseLeave={onMenuHoverHandler}>
            <ul className="nav-list">
                <li className={isHovered ? "hoveredMenuOptions" : "menuOptions"}><Link to="/" element={<Home/>}>Home</Link></li>
                <li className={isHovered ? "hoveredMenuOptions" : "menuOptions"}><Link to="/projects" element={<Project/>}>Project</Link></li>
                <li className={isHovered ? "hoveredMenuOptions" : "menuOptions"}><Link to="/about" element={<About/>}>Resume</Link></li>
                <li className={isHovered ? "hoveredMenuOptions" : "menuOptions"}><Link to="/contact" element={<ContactUs/>}>Contact Us</Link></li>
            </ul>
        </div>
    );
}

export default MenuOptions;