import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";


const MobileMenu = () => {
    const [displayMenu, setMenu] = useState(false);

    const mobileMenuHandler = () => {
        setMenu(!displayMenu);
    }

    const closeMenu = () => {
        setMenu(false);
    }

    return (
        <div className="mobileMenu">
            <button className="menuIconButton" type="button" onClick={mobileMenuHandler} aria-label="Toggle navigation menu">
                <AiOutlineMenuUnfold className="menuIcon" />
            </button>
            <div className={displayMenu ? "sideBar sideBarActive" : "sideBar"}>
                <ul>
                    <Link to="/" onClick={closeMenu}><li>HOME</li></Link>
                    <Link to="/projects" onClick={closeMenu}><li>PROJECT</li></Link>
                    <Link to="/about" onClick={closeMenu}><li>RESUME</li></Link>
                    <Link to="/contact" onClick={closeMenu}><li>CONTACT</li></Link>
                </ul>
                <h2 className="sideBarHeading">
                    J<span>ay </span>Lee
                </h2>
            </div>
        </div>
    );
}

export default MobileMenu;
