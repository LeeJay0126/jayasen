import Logo from "./Logo";
import "./Menu.css";
import MenuOptions from "./MenuOptions";
import MobileMenu from "./MobileMenu";


const Menu = () => {

    return (
        <div className = "menuBar">
            <Logo/>
            <MenuOptions/>
            <MobileMenu/>
        </div>
    )

};

export default Menu;