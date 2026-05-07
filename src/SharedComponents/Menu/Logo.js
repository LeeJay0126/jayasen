import { Link } from "react-router-dom";


const Logo = () => {

    return (
        <div className="logo">
            <Link to="/">
                <p className="logoLetters">
                    Jay Lee
                </p>
            </Link>
            <p className="logoFooters">
                QA Automation
            </p>
        </div >
    );
};

export default Logo;
