import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";


const MobileMenu = () => {
    const [displayMenu, setMenu] = useState(false);

    const mobileMenuHandler = () => {
        setMenu(!displayMenu);
    }

    return (
        <div className="mobileMenu">
            <AiOutlineMenuUnfold className={displayMenu ? "menuIcon menuIconClicked" : "menuIcon"} onClick={mobileMenuHandler} />
            <div className={displayMenu ? "sideBar sideBarActive" : "sideBar"}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Project</li></Link>
                    <Link to="/"><li>Resume</li></Link>
                    <Link to="/"><li>Contact Us</li></Link>
                </ul>
                <h2 className="sideBarHeading">
                    Jay . Asen
                </h2>
            </div>
        </div>
    );
}

export default MobileMenu;