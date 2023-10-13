import { useState } from "react";
import { Link } from "react-router-dom";

const MenuOptions = () => {

    const [isHovered, setHovered] = useState(false);

    const onMenuHoverHandler = () => {
        setHovered(!isHovered);
    };

    return (
        <div className="optionList" onMouseEnter={onMenuHoverHandler} onMouseLeave={onMenuHoverHandler}>
            <ul className="nav-list">
                <li className={isHovered ? "hoveredMenuOptions" : "menuOptions"}><Link to="/">Home</Link></li>
                <li className={isHovered ? "hoveredMenuOptions" : "menuOptions"}><Link to="/">Project</Link></li>
                <li className={isHovered ? "hoveredMenuOptions" : "menuOptions"}><Link to="/">Resume</Link></li>
                <li className={isHovered ? "hoveredMenuOptions" : "menuOptions"}><Link to="/">Contact Us</Link></li>
            </ul>
        </div>
    );
}

export default MenuOptions;