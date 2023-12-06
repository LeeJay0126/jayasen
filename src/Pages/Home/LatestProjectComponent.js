// Should get image to use for the latest projects
import { Link } from "react-router-dom";
import tempImage from "../../SharedComponents/Imgs/SoloImages/Jay/MoonNBack.jpg";

const LatestProjectComponent = () => {

    return (
        <div>
            <div className="homeLatestProjectsContainer">
                <div className="homeProjectsFlex">
                    <Link to="/">
                        <img src={tempImage} alt="tempImage" className="tempImage" />
                    </Link>                    <h4 className="latestProjectTitle">WBH</h4>
                </div>
                <div className="homeProjectsFlex">
                    <Link to="/">
                        <img src={tempImage} alt="tempImage" className="tempImage" />
                    </Link>                    <h4 className="latestProjectTitle">NBA</h4>
                </div>
                <div className="homeProjectsFlex">
                    <Link to="/">
                        <img src={tempImage} alt="tempImage" className="tempImage" />
                    </Link>
                    <h4 className="latestProjectTitle">Temp</h4>
                </div>
            </div>
            <div className="HomeProjectLinkContainer">
                <div className="HomeProjectLinkHelper">
                    <Link to="/" className="HomeProjectLink">Projects In Progress</Link>
                </div>
                <div className="HomeProjectLinkHelper">
                    <Link to="/" className="HomeProjectLink">Completed Projects</Link>
                </div>
            </div>
        </div>
    );
};

export default LatestProjectComponent;