import { Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";


const Logo = () => {

    return (
        <div className="logo">
            <Link to="/" element={<Home />}>
                <p className="logoLetters">
                    Jay . Asen
                </p>
            </Link>
            <p className="logoFooters">
                LeeBrothers
            </p>
        </div >
    );
};

export default Logo;