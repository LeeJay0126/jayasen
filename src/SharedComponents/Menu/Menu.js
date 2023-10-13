import Logo from "./Logo";
import "./Menu.css";
import MenuOptions from "./MenuOptions";


const Menu = () => {

    return (
        <div className = "menuBar">
            <Logo/>
            <MenuOptions/>
        </div>
    )

};

export default Menu;