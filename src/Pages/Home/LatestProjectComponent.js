// Should get image to use for the latest projects
import { Link } from "react-router-dom";
import tempImage from "../../SharedComponents/Imgs/SoloImages/Jay/MoonNBack.jpg";
import midam from "../../SharedComponents/Imgs/Logos/midam.png";

const LatestProjectComponent = () => {

    return (
        <div>
            <div className="homeLatestProjectsContainer">
                <div className="homeProjectsFlex">
                    <Link to="/">
                        <img src={midam} alt="tempImage" className="tempImage" />
                    </Link>
                    <h4 className="latestProjectTitle">Midam</h4>
                </div>
                <div className="homeProjectsFlex">
                    <Link to="/">
                        <img src={tempImage} alt="tempImage" className="tempImage" />
                    </Link>                    
                    <h4 className="latestProjectTitle">NBA</h4>
                </div>
            </div>
            <div className="HomeProjectLinkContainer">
                <div className="HomeProjectLinkHelper">
                    <Link to="/" className="HomeProjectLink">More Projects</Link>
                </div>
            </div>
        </div>
    );
};

export default LatestProjectComponent;